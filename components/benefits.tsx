"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Zap, 
  Palette, 
  BarChart 
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Taux de clics plus élevé",
    description: "Nos miniatures sont conçues pour attirer l'attention et augmenter le CTR de votre vidéo."
  },
  {
    icon: Users,
    title: "Croissance de l'audience",
    description: "Attirez de nouveaux téléspectateurs et convertissez-les en abonnés fidèles avec des miniatures professionnelles."
  },
  {
    icon: Clock,
    title: "Gagnez du temps",
    description: "Concentrez-vous sur la création de contenu de qualité pendant que nous gérons le processus de conception des miniatures."
  },
  {
    icon: Zap,
    title: "Délai de livraison rapide",
    description: "Recevez vos vignettes sous 24 à 36 heures, revisions comprises."
  },
  {
    icon: Palette,
    title: "Une image de marque cohérente",
    description: "Maintenez une identité visuelle cohérente sur votre chaîne pour renforcer la reconnaissance de la marque."
  },
  {
    icon: BarChart,
    title: "Conception axée sur les données",
    description: "Nous analysons ce qui fonctionne dans votre niche et optimisons les miniatures pour des performances maximales."
  }
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" ref={ref} className="py-20 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">360Miniamaker</span>
          </h2>
          {/* <p className="text-muted-foreground text-lg">
          Découvrez les avantages de travailler avec des concepteurs de miniatures professionnelles
          </p> */}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-600/10 to-blue-400/10 border border-blue-500/20 rounded-xl max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Prêt à transformer vos miniatures YouTube?</h3>
              {/* <p className="text-muted-foreground">Rejoignez notre liste de créateurs de contenu qui ont augmenté leur CTR grâce à nos designs</p> */}
            </div>
            <button 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-medium rounded-lg transition-colors"
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
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;