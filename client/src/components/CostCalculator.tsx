import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FadeIn, ScaleIn } from '@/components/animations';
import { Separator } from '@/components/ui/separator';
import { Check, AlertCircle } from 'lucide-react';

const CostCalculator = () => {
  // Main options state
  const [websiteType, setWebsiteType] = useState<string>("landing");
  const [pageCount, setPageCount] = useState<number>(1);
  const [designComplexity, setDesignComplexity] = useState<string>("standard");
  const [timeframe, setTimeframe] = useState<string>("standard");
  const [activeTab, setActiveTab] = useState<string>("options");
  
  // Features state
  const [features, setFeatures] = useState({
    responsiveDesign: true,
    contentManagement: false,
    ecommerce: false,
    blog: false,
    contactForm: true,
    seoOptimization: false,
    analytics: false,
    socialMedia: false,
    maintenance: false,
    hosting: false
  });
  
  // Results state
  const [totalCost, setTotalCost] = useState<number>(0);
  const [minCost, setMinCost] = useState<number>(0);
  const [maxCost, setMaxCost] = useState<number>(0);
  const [packageTier, setPackageTier] = useState<string>("Starter");
  const [leadTime, setLeadTime] = useState<string>("2-3 weeks");
  
  // Base costs
  const baseTypeCosts = {
    landing: { min: 150, max: 250 },
    business: { min: 300, max: 500 },
    ecommerce: { min: 700, max: 1050 }
  };
  
  // Additional costs for features
  const featureCosts = {
    responsiveDesign: { min: 0, max: 0 }, // Included in base
    contentManagement: { min: 50, max: 100 },
    ecommerce: { min: 200, max: 350 },
    blog: { min: 100, max: 150 },
    contactForm: { min: 0, max: 0 }, // Included in base
    seoOptimization: { min: 75, max: 150 },
    analytics: { min: 50, max: 100 },
    socialMedia: { min: 25, max: 75 },
    maintenance: { min: 50, max: 75 }, // Monthly
    hosting: { min: 50, max: 75 } // One-time setup
  };
  
  // Multipliers
  const complexityMultipliers = {
    simple: 0.8,
    standard: 1.0,
    premium: 1.3
  };
  
  const timeframeMultipliers = {
    relaxed: 0.9,
    standard: 1.0,
    rush: 1.5
  };
  
  // Calculate the total cost
  useEffect(() => {
    let baseMin = 0;
    let baseMax = 0;
    
    // Set base cost from website type
    if (websiteType === "landing") {
      baseMin = baseTypeCosts.landing.min;
      baseMax = baseTypeCosts.landing.max;
      setPackageTier("Starter");
      setLeadTime("2-3 weeks");
    } else if (websiteType === "business") {
      baseMin = baseTypeCosts.business.min;
      baseMax = baseTypeCosts.business.max;
      setPackageTier("Standard");
      setLeadTime("3-4 weeks");
    } else if (websiteType === "ecommerce") {
      baseMin = baseTypeCosts.ecommerce.min;
      baseMax = baseTypeCosts.ecommerce.max;
      setPackageTier("Premium");
      setLeadTime("4-6 weeks");
    }
    
    // Adjust for page count (only for multi-page sites)
    if (websiteType !== "landing") {
      // Landing pages are single-page by definition
      // For other site types, the base cost includes up to 5 pages
      if (pageCount > 5) {
        // Add cost for additional pages over 5
        baseMin += (pageCount - 5) * 50;
        baseMax += (pageCount - 5) * 75;
      }
    }
    
    // Calculate feature costs
    let featureMin = 0;
    let featureMax = 0;
    
    Object.entries(features).forEach(([feature, isEnabled]) => {
      if (isEnabled && featureCosts[feature as keyof typeof featureCosts]) {
        featureMin += featureCosts[feature as keyof typeof featureCosts].min;
        featureMax += featureCosts[feature as keyof typeof featureCosts].max;
      }
    });
    
    // Apply complexity multiplier
    let complexityMultiplier = 1.0;
    if (designComplexity === "simple") {
      complexityMultiplier = complexityMultipliers.simple;
    } else if (designComplexity === "premium") {
      complexityMultiplier = complexityMultipliers.premium;
    }
    
    baseMin = Math.round(baseMin * complexityMultiplier);
    baseMax = Math.round(baseMax * complexityMultiplier);
    
    // Apply timeframe multiplier
    let timeMultiplier = 1.0;
    if (timeframe === "relaxed") {
      timeMultiplier = timeframeMultipliers.relaxed;
      setLeadTime(websiteType === "landing" ? "3-4 weeks" : websiteType === "business" ? "4-5 weeks" : "6-8 weeks");
    } else if (timeframe === "rush") {
      timeMultiplier = timeframeMultipliers.rush;
      setLeadTime(websiteType === "landing" ? "1 week" : websiteType === "business" ? "2 weeks" : "3 weeks");
    }
    
    const finalMin = Math.round((baseMin + featureMin) * timeMultiplier);
    const finalMax = Math.round((baseMax + featureMax) * timeMultiplier);
    
    // Update the state
    setMinCost(finalMin);
    setMaxCost(finalMax);
    
    // Calculate average for the display total
    setTotalCost(Math.round((finalMin + finalMax) / 2));
    
  }, [websiteType, pageCount, designComplexity, timeframe, features]);

  return (
    <FadeIn>
      <Card className="w-full max-w-4xl mx-auto shadow-lg border border-gray-200">
        <CardHeader className="bg-gradient-to-r from-secondary to-primary text-white">
          <CardTitle className="text-2xl">Project Cost Calculator</CardTitle>
          <CardDescription className="text-white text-opacity-90">
            Estimate the cost of your web development project
          </CardDescription>
        </CardHeader>
        
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="options">Project Options</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="options" className="p-0">
            <CardContent className="pt-6">
              <div className="space-y-8">
                {/* Website Type */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Website Type</h3>
                  <RadioGroup 
                    defaultValue="landing" 
                    value={websiteType}
                    onValueChange={setWebsiteType}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <Label 
                      htmlFor="landing" 
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 cursor-pointer ${websiteType === 'landing' ? 'border-primary' : ''}`}
                    >
                      <RadioGroupItem value="landing" id="landing" className="sr-only" />
                      <span className="text-sm font-semibold">Landing Page</span>
                      <span className="mt-1 text-xs text-gray-500">Single page site</span>
                    </Label>
                    
                    <Label 
                      htmlFor="business" 
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 cursor-pointer ${websiteType === 'business' ? 'border-primary' : ''}`}
                    >
                      <RadioGroupItem value="business" id="business" className="sr-only" />
                      <span className="text-sm font-semibold">Business Website</span>
                      <span className="mt-1 text-xs text-gray-500">Multi-page site</span>
                    </Label>
                    
                    <Label 
                      htmlFor="ecommerce" 
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 cursor-pointer ${websiteType === 'ecommerce' ? 'border-primary' : ''}`}
                    >
                      <RadioGroupItem value="ecommerce" id="ecommerce" className="sr-only" />
                      <span className="text-sm font-semibold">E-commerce Site</span>
                      <span className="mt-1 text-xs text-gray-500">Online store</span>
                    </Label>
                  </RadioGroup>
                </div>
                
                {/* Number of Pages - Only show for business & ecommerce */}
                {websiteType !== "landing" && (
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold">Number of Pages</h3>
                      <span className="text-lg font-bold">{pageCount}</span>
                    </div>
                    <Slider
                      value={[pageCount]}
                      min={1}
                      max={websiteType === "business" ? 15 : 20}
                      step={1}
                      onValueChange={([value]) => setPageCount(value)}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>1</span>
                      <span>{websiteType === "business" ? 15 : 20}</span>
                    </div>
                  </div>
                )}
                
                {/* Design Complexity */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Design Complexity</h3>
                  <RadioGroup 
                    defaultValue="standard" 
                    value={designComplexity}
                    onValueChange={setDesignComplexity}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <Label 
                      htmlFor="simple" 
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 cursor-pointer ${designComplexity === 'simple' ? 'border-primary' : ''}`}
                    >
                      <RadioGroupItem value="simple" id="simple" className="sr-only" />
                      <span className="text-sm font-semibold">Simple</span>
                      <span className="mt-1 text-xs text-gray-500">Clean, minimalist design</span>
                    </Label>
                    
                    <Label 
                      htmlFor="standard" 
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 cursor-pointer ${designComplexity === 'standard' ? 'border-primary' : ''}`}
                    >
                      <RadioGroupItem value="standard" id="standard" className="sr-only" />
                      <span className="text-sm font-semibold">Standard</span>
                      <span className="mt-1 text-xs text-gray-500">Modern, professional design</span>
                    </Label>
                    
                    <Label 
                      htmlFor="premium" 
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 cursor-pointer ${designComplexity === 'premium' ? 'border-primary' : ''}`}
                    >
                      <RadioGroupItem value="premium" id="premium" className="sr-only" />
                      <span className="text-sm font-semibold">Premium</span>
                      <span className="mt-1 text-xs text-gray-500">Custom, high-end design</span>
                    </Label>
                  </RadioGroup>
                </div>
                
                {/* Timeframe */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Timeframe</h3>
                  <RadioGroup 
                    defaultValue="standard" 
                    value={timeframe}
                    onValueChange={setTimeframe}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <Label 
                      htmlFor="relaxed" 
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 cursor-pointer ${timeframe === 'relaxed' ? 'border-primary' : ''}`}
                    >
                      <RadioGroupItem value="relaxed" id="relaxed" className="sr-only" />
                      <span className="text-sm font-semibold">Relaxed</span>
                      <span className="mt-1 text-xs text-gray-500">No rush, save 10%</span>
                    </Label>
                    
                    <Label 
                      htmlFor="standard-time" 
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 cursor-pointer ${timeframe === 'standard' ? 'border-primary' : ''}`}
                    >
                      <RadioGroupItem value="standard" id="standard-time" className="sr-only" />
                      <span className="text-sm font-semibold">Standard</span>
                      <span className="mt-1 text-xs text-gray-500">Normal timeline</span>
                    </Label>
                    
                    <Label 
                      htmlFor="rush" 
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 cursor-pointer ${timeframe === 'rush' ? 'border-primary' : ''}`}
                    >
                      <RadioGroupItem value="rush" id="rush" className="sr-only" />
                      <span className="text-sm font-semibold">Rush</span>
                      <span className="mt-1 text-xs text-gray-500">Fast-track, +50% cost</span>
                    </Label>
                  </RadioGroup>
                </div>
                
                {/* Additional Features */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Additional Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(features).map(([feature, enabled]) => {
                      const readableFeature = {
                        responsiveDesign: "Responsive Design",
                        contentManagement: "Content Management",
                        ecommerce: "E-commerce Functionality",
                        blog: "Blog Section",
                        contactForm: "Contact Form",
                        seoOptimization: "SEO Optimization",
                        analytics: "Analytics Integration",
                        socialMedia: "Social Media Integration",
                        maintenance: "Monthly Maintenance",
                        hosting: "Hosting Setup"
                      };
                      
                      // Skip e-commerce checkbox if website type is already e-commerce
                      if (feature === "ecommerce" && websiteType === "ecommerce") {
                        return null;
                      }
                      
                      return (
                        <div key={feature} className="flex items-center justify-between space-x-2">
                          <Label htmlFor={feature} className="flex items-center space-x-2 cursor-pointer">
                            <span>{readableFeature[feature as keyof typeof readableFeature]}</span>
                            {(feature === "responsiveDesign" || feature === "contactForm") && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                Included
                              </span>
                            )}
                          </Label>
                          <Switch
                            id={feature}
                            checked={enabled}
                            onCheckedChange={(checked) => 
                              setFeatures(prev => ({ ...prev, [feature]: checked }))
                            }
                            disabled={feature === "responsiveDesign" || feature === "contactForm" || (feature === "ecommerce" && websiteType === "ecommerce")}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-end gap-4 border-t pt-6">
              <Button variant="outline" onClick={() => {
                // Reset to defaults
                setWebsiteType("landing");
                setPageCount(1);
                setDesignComplexity("standard");
                setTimeframe("standard");
                setFeatures({
                  responsiveDesign: true,
                  contentManagement: false,
                  ecommerce: false,
                  blog: false,
                  contactForm: true,
                  seoOptimization: false,
                  analytics: false,
                  socialMedia: false,
                  maintenance: false,
                  hosting: false
                });
              }}>
                Reset
              </Button>
              <Button onClick={() => setActiveTab("results")}>
                Calculate
              </Button>
            </CardFooter>
          </TabsContent>
          
          <TabsContent value="results">
            <CardContent className="pt-6">
              <ScaleIn>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Estimated Project Cost</h3>
                  <div className="mt-4 text-4xl font-bold text-primary">
                    ${totalCost}
                  </div>
                  <p className="text-gray-500 mt-2">
                    Range: ${minCost} - ${maxCost}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold">Project Summary</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Website Type:</span>
                        <span className="font-medium">
                          {websiteType === "landing" ? "Landing Page" : 
                           websiteType === "business" ? "Business Website" : 
                           "E-commerce Website"}
                        </span>
                      </div>
                      
                      {websiteType !== "landing" && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Number of Pages:</span>
                          <span className="font-medium">{pageCount}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Design Complexity:</span>
                        <span className="font-medium capitalize">{designComplexity}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeframe:</span>
                        <span className="font-medium capitalize">{timeframe}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Estimated Lead Time:</span>
                        <span className="font-medium">{leadTime}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Recommended Package:</span>
                        <span className="font-medium">{packageTier}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold">Included Features</h4>
                    <div className="space-y-2">
                      {Object.entries(features).map(([feature, enabled]) => {
                        if (feature === "ecommerce" && websiteType === "ecommerce") {
                          enabled = true; // E-commerce is included for e-commerce websites
                        }
                        
                        if (enabled) {
                          const readableFeature = {
                            responsiveDesign: "Responsive Design",
                            contentManagement: "Content Management",
                            ecommerce: "E-commerce Functionality",
                            blog: "Blog Section",
                            contactForm: "Contact Form",
                            seoOptimization: "SEO Optimization",
                            analytics: "Analytics Integration",
                            socialMedia: "Social Media Integration",
                            maintenance: "Monthly Maintenance",
                            hosting: "Hosting Setup"
                          };
                          
                          return (
                            <div key={feature} className="flex items-center space-x-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span>{readableFeature[feature as keyof typeof readableFeature]}</span>
                              {feature === "maintenance" && <span className="text-xs text-gray-500">(Monthly)</span>}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Please Note</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        This calculator provides an estimate based on typical project requirements. 
                        The final cost may vary based on specific project details and requirements. 
                        Contact us for a detailed quote.
                      </p>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </CardContent>
            
            <CardFooter className="flex justify-between gap-4 border-t pt-6">
              <Button 
                variant="outline" 
                onClick={() => setActiveTab("options")}
              >
                Edit Options
              </Button>
              <Button onClick={() => window.location.href = '/contact'}>
                Get a Detailed Quote
              </Button>
            </CardFooter>
          </TabsContent>
        </Tabs>
      </Card>
    </FadeIn>
  );
};

export default CostCalculator;