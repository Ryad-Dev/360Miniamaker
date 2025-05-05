"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer, TrendingUp, Youtube } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-36  md:pt-32 md:pb-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium">
              <span className="mr-2">⚡</span>
              <span>Miniatures YouTube Professionelles</span>
            </div>
            
            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="">Boostez votre </span><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
              Taux de clic
              </span>
              
              <span className="block">Avec des miniatures accrocheuses</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
            Service de conception de miniatures professionnelles pour les YouTubeurs qui souhaitent se démarquer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-0"
                onClick={() => {
                  const element = document.getElementById('pricing');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Voir les tarifs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-500/20 hover:bg-blue-500/10"
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Voir nos realisations
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8 w-full">
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <MousePointer className="h-6 w-6 text-blue-500 mb-2" />
                <p className="text-sm font-medium">Higher CTR</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <TrendingUp className="h-6 w-6 text-blue-500 mb-2" />
                <p className="text-sm font-medium">Plus de vues</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <Youtube className="h-6 w-6 text-blue-500 mb-2" />
                <p className="text-sm font-medium">Croissance de votre chaine</p>
              </div>
            </div>
          </motion.div>
          
         
        
      </div>
    </section>
  );
};

export default Hero;