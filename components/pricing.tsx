"use client"
import Link from "next/link";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import router from 'next/router';

const pricingPlans = [
  {
    name: "Basic",
    priceb: "25",
    price: "15",
    description: "Idéal pour les créateurs débutants",
    features: [
      "1 Miniature personnalisée",
      "Retouches ilimitées",
      "Fichiers haute résolution",
      "livraison en 24h",
    ],
    notIncluded: [

    ],
    popular: false,
    buttonText: "Commencer maintenant",
    buttonVariant: "outline" as const,
  },

  {
    name: "Pack de 5 miniatures",
    priceb: "120",
    price: "70",
    description: "5 miniatures à utiliser à votre rythme de publication",
    features: [
      "5 Miniatures personnalisées",
      "Retouches ilimitées",
      "Fichiers haute résolution",
      "livraison en 24h pour chaque miniature ",
    ],
    notIncluded: [
    ],
    popular: false,
    buttonText: "Commencer maintenant",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pack de 10 miniatures",
    priceb: "220",
    price: "130",
    description: "10 miniatures à utiliser à votre rythme de publication",
    features: [
      "10 Miniatures personnalisées",
      "Retouches ilimitées",
      "Fichiers haute résolution",
      "livraison en 24h pour chaque miniature ",
    ],
    notIncluded: [
    ],
    popular: true,
    buttonText: "Commencer maintenant",
    buttonVariant: "outline" as const,
  },
  {
    name: "A/B Test",
    priceb: "40",
    price: "25",
    description: "Testez différentes conceptions pour maximiser le CTR",
    features: [
      "2 Versions de miniature personnalisées",
      "Retouches ilimitées",
      "Fichiers haute résolution",
      "livraison en 32h",
    ],
    notIncluded: [
    ],
    popular: false,
    buttonText: "Commencer maintenant",
    buttonVariant: "outline" as const,
  },

];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleClick = () => {
    window.open("https://tally.so/r/mJM9kJ", "_blank"); // Remplace par l'URL de redirection souhaitée
  };

  return (
    <section id="pricing" ref={ref} className="py-10 relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pricing <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">Simple et Transparent </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choisissez le plan qui correspond aux besoins et au budget de votre chaîne
          </p>
          {/* <h2 className="text-3xl md:text-4xl font-bold  pt-7">
          <span className="bg-clip-text text-transparent bg-gradient-to-r  from-green-500 to-green-300">-50% </span>
          </h2> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
            >
              <Card className={`flex flex-col w-full backdrop-blur-sm ${plan.popular
                  ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-transparent relative overflow-hidden'
                  : 'bg-card/50 border-border/50'
                }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                      Populaire
                    </div>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-2xl line-through">{plan.priceb}</span>
                    <span className="text-4xl font-bold">  {plan.price} €</span>
                    {plan.name == "" && <span className="text-muted-foreground ml-1">/ miniature</span>}
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start text-muted-foreground">
                        <X className="h-5 w-5 text-muted-foreground mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>

                  <Button onClick={handleClick}
                    variant={plan.buttonVariant}
                    className={`w-full ${plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-0'
                        : 'border-blue-500/20 hover:bg-blue-500/10'
                      }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Besoin d'un plan personnalisée ?</h3>
          <p className="text-center text-muted-foreground">
            Contactez-nous pour des packages personnalisés adaptés à vos besoins spécifiques, y compris des commandes groupées,
            ou la création continue de miniatures pour votre calendrier de contenu.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;