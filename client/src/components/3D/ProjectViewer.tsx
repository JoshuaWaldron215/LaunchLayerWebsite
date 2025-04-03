import { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, PresentationControls, useTexture, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { motion } from 'framer-motion';

// Device frame component that will display our website texture
interface DeviceProps {
  texture: THREE.Texture;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  isActive: boolean;
  onClick: () => void;
}

const Device = ({ texture, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1], isActive, onClick }: DeviceProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const frameColor = new THREE.Color(isActive ? '#2B6CB0' : '#1A202C');
  
  useFrame(() => {
    if (meshRef.current && !isActive) {
      // Gentle floating animation when not active
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group 
      position={new THREE.Vector3(...position)} 
      rotation={new THREE.Euler(...rotation)} 
      scale={new THREE.Vector3(...scale)}
      onClick={onClick}
    >
      {/* Device frame */}
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color={frameColor} />
      </mesh>
      
      {/* Screen with website texture */}
      <mesh position={[0, 0, 0.051]}>
        <planeGeometry args={[1.9, 2.8]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      
      {/* Home button */}
      <mesh position={[0, -1.4, 0.06]}>
        <cylinderGeometry args={[0.1, 0.1, 0.03, 32]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  );
};

// Scene setup with projects
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
}

interface ProjectSceneProps {
  projects: Project[];
  selectedProject: string | null;
  setSelectedProject: (id: string) => void;
}

const ProjectScene = ({ projects, selectedProject, setSelectedProject }: ProjectSceneProps) => {
  // Create fallback texture
  const fallbackTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Fill with a light color
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add some text
      ctx.fillStyle = '#2B6CB0';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('LaunchLayer', canvas.width / 2, canvas.height / 2 - 20);
      ctx.font = '18px Arial';
      ctx.fillText('Web Development', canvas.width / 2, canvas.height / 2 + 20);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);
  
  // Try to load all project textures
  const textureInput = Object.fromEntries(
    projects.map(project => [project.id, project.image])
  );
  
  // Type assertion to help TypeScript understand the structure
  let textures = {} as Record<string, THREE.Texture>;
  try {
    textures = useTexture(textureInput) as Record<string, THREE.Texture>;
  } catch (error) {
    console.error("Error loading textures:", error);
  }
  
  // Calculate positions in a circle
  const getPosition = (index: number, total: number): [number, number, number] => {
    const angle = (index / total) * Math.PI * 2;
    const radius = 5;
    return [Math.sin(angle) * radius, 0, Math.cos(angle) * radius];
  };
  
  // Create a map of valid textures using fallback when needed
  const validTextures = useMemo(() => {
    const result: Record<string, THREE.Texture> = {};
    projects.forEach(project => {
      // Use the loaded texture or fallback
      result[project.id] = textures[project.id] || fallbackTexture;
    });
    return result;
  }, [textures, projects, fallbackTexture]);
  
  return (
    <>
      {projects.map((project, index) => {
        const isActive = project.id === selectedProject;
        const position = getPosition(index, projects.length);
        const rotation: [number, number, number] = [0, -Math.atan2(position[0], position[2]), 0];
        const scale: [number, number, number] = isActive ? [1.2, 1.2, 1.2] : [1, 1, 1];
        
        return (
          <Device 
            key={project.id}
            texture={validTextures[project.id]}
            position={position}
            rotation={rotation}
            scale={scale}
            isActive={isActive}
            onClick={() => setSelectedProject(project.id)}
          />
        );
      })}
      
      {/* Add info panel for selected project */}
      {selectedProject && (
        <Html
          position={[0, -3, 0]}
          transform
          occlude
          style={{
            width: '300px',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0,0,0,0.2)',
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <div>
            <h3 style={{ margin: '0 0 10px', color: '#2B6CB0' }}>
              {projects.find(p => p.id === selectedProject)?.title}
            </h3>
            <p style={{ margin: '0', fontSize: '14px' }}>
              {projects.find(p => p.id === selectedProject)?.description}
            </p>
          </div>
        </Html>
      )}
      
      <Environment preset="city" />
    </>
  );
};

// Main component to be used in the app
interface Project3DViewerProps {
  projects: Project[];
}

const Project3DViewer = ({ projects }: Project3DViewerProps) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  useEffect(() => {
    // Set first project as selected by default
    if (projects.length > 0 && !selectedProject) {
      setSelectedProject(projects[0].id);
    }
  }, [projects, selectedProject]);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <Suspense fallback={
          <Html center>
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mx-auto mb-2"></div>
              <p>Loading 3D Experience...</p>
            </div>
          </Html>
        }>
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 200 }}
          >
            <ProjectScene 
              projects={projects} 
              selectedProject={selectedProject} 
              setSelectedProject={setSelectedProject} 
            />
          </PresentationControls>
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
      
      {/* Controls and info outside of canvas */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3 px-4">
        {projects.map((project) => (
          <motion.button
            key={project.id}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedProject === project.id 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(project.id)}
          >
            {project.title}
          </motion.button>
        ))}
      </div>
      
      {/* Instructions */}
      <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-2 rounded-md">
        <p>Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default Project3DViewer;