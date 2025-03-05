"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien de temps faut-il pour recevoir mes miniatures ?",
    answer: "Le délai de livraison standard est de 24 heures pour une miniature."
  },
  {
    question: "De quelles informations avez-vous besoin de ma part ?",
    answer: "Pour créer des miniatures efficaces, nous aurons besoin du sujet de votre vidéo, des éléments spécifiques que vous souhaitez inclure, du guide de style de votre chaîne (si disponible) et des images de référence ou exemples que vous souhaitez. Plus vous nous fournirez d'informations, mieux nous pourrons correspondre à votre vision."
  },
  {
    question: "Combien de révisions sont incluses ?",
    answer: "Quelque soit le plan choisi , les retouches sont illimitees jusqu'a satisfaction du clients."
  },
  {
    question: "Quels formats de fichiers vais-je recevoir ?",
    answer: "Vous recevrez vos vignettes aux formats PNG haute résolution."
  },
  {
    question: "Puis-je demander des styles ou des éléments spécifiques ?",
    answer: "Absolument ! Nous vous encourageons à partager votre vision, vos images de référence et tout élément spécifique que vous souhaitez inclure. Notre objectif est de créer des miniatures qui correspondent à votre marque et au style de votre contenu."
  },
  {
    question: "Quelle est la différence entre le plan Basic et le pack de 5 miniatures ?",
    answer: "Le plan basic comprend une miniature unique tandis que le pack de 5 miniatures comprennent 5 miniatures facturees en une fois mais qui peut etre utilise au rythme du youtubeur lorsqu'il veut publier chaque video "
  },
  {
    question: "Comment passer une commande ?",
    answer: "Sélectionnez simplement votre forfait préféré, remplissez notre bref questionnaire sur vos besoins en matière de miniature. Nous vous contacterons ensuite pour recueillir toutes les informations supplémentaires nécessaires pour commencer à travailler sur vos miniatures."
  }
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mailClick = () => {
    window.open("mailto:miniaaker360@gmail.com", "_blank"); // Remplace par l'URL de redirection souhaitée
  };
  return (
    <section id="faq" ref={ref} className="py-10 relative">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">(FAQ)</span>
          </h2>
          {/* <p className="text-muted-foreground text-lg">
          Trouvez des réponses aux questions courantes sur notre service de conception de miniature
          </p> */}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
          Vous avez encore des questions ? <button onClick={mailClick}   className="text-blue-500 hover:underline">contactez nous</button> pour plus d'informations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;