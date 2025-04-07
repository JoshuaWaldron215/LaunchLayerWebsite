import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from '@/components/animations';
import { PlusCircle, MinusCircle } from 'lucide-react';

// Define FAQ item type
export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
}

const FAQAccordion = ({ 
  faqs, 
  title = "Frequently Asked Questions", 
  description = "Find answers to common questions about our web development services" 
}: FAQAccordionProps) => {
  return (
    <FadeIn>
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 data-[state=open]:bg-gray-50">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-left font-medium text-lg">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-4">
                    <PlusCircle className="h-5 w-5 text-primary transition-opacity duration-200 data-[state=open]:opacity-0 data-[state=open]:hidden" />
                    <MinusCircle className="h-5 w-5 text-primary transition-opacity duration-200 data-[state=closed]:opacity-0 data-[state=closed]:hidden" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-0 pb-4 text-gray-600">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pt-4 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </motion.div>
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Don't see your question here? <a href="/contact" className="text-primary font-medium hover:underline">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

export default FAQAccordion;