"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MessageSquare, 
  Palette, 
  FileImage, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    title: "1. Consultation",
    description: "Nous discutons du style de votre chaîne, du public cible et des exigences spécifiques pour vos miniatures."
  },
  {
    icon: Palette,
    title: "2. Design",
    description: "Nous creons votre miniature accrocheuse qui correspond à votre marque et captent l'attention des spectateurs."
  },
  {
    icon: FileImage,
    title: "3. Retouches",
    description: "Nous affinons les conceptions en fonction de vos commentaires jusqu'à ce que vous soyez entièrement satisfait du résultat."
  },
  {
    icon: CheckCircle,
    title: "4. Livraison",
    description: "Recevez vos vignettes finalisées en haute résolution, prêtes à être téléchargées sur vos vidéos YouTube."
  }
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-20 relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            4 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">Etapes</span>
          </h2>
          {/* <p className="text-muted-foreground text-lg">
          Une approche simple et rationalisée pour créer des miniatures qui convertissent les spectateurs en abonnés
          </p> */}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 h-full flex flex-col">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground flex-grow">{step.description}</p>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-blue-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl max-w-3xl mx-auto"
        >
          <p className="text-center text-lg">
            <span className="font-semibold">Délai moyen d'exécution :</span> 24 heures pour les commandes standard, 
            avec des d'eventuelles revisions qui suivront.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;