import { motion } from 'framer-motion';
import { FadeIn, CountUpAnimation } from '@/components/animations';

// Logos import from react-icons
import { SiAdobeacrobatreader, SiChase, SiCocacola, SiSamsung, SiStarlingbank } from 'react-icons/si';

interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface ClientLogo {
  icon: React.ReactNode;
  name: string;
}

const stats: StatItem[] = [
  {
    value: '99%',
    label: 'Client Satisfaction',
  },
  {
    value: '50+',
    label: 'Projects Completed',
  },
  {
    value: '5+',
    label: 'Years Experience',
  },
  {
    value: '100%',
    label: 'Delivery On Time',
  },
];

const clientLogos: ClientLogo[] = [
  {
    icon: <SiChase className="w-full h-full" />,
    name: 'Chase Bank',
  },
  {
    icon: <SiCocacola className="w-full h-full" />,
    name: 'Coca Cola',
  },
  {
    icon: <SiSamsung className="w-full h-full" />,
    name: 'Samsung',
  },
  {
    icon: <SiAdobeacrobatreader className="w-full h-full" />,
    name: 'Adobe',
  },
  {
    icon: <SiStarlingbank className="w-full h-full" />,
    name: 'Starling',
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 px-8 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building successful digital experiences for businesses just like yours.
            </p>
          </div>
        </FadeIn>
        
        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <FadeIn 
              key={index} 
              direction="up" 
              delay={0.1 * index} 
              className="text-center"
            >
              <div className="p-6 bg-white rounded-lg shadow-md h-full flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl text-accent mb-2">
                  <CountUpAnimation 
                    targetNumber={stat.value} 
                    duration={2000} 
                    delay={index * 200} 
                  />
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Trusted By */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-10">
            <h3 className="text-xl font-medium text-gray-500">Trusted By</h3>
          </div>
        </FadeIn>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + (index * 0.1),
                ease: "easeOut" 
              }}
              className="w-16 h-16 md:w-20 md:h-20 text-gray-400 hover:text-accent opacity-70 hover:opacity-100 transition-all duration-300"
            >
              {client.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;