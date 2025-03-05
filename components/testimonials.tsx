"use client"

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Pierre-Yves Meyer",
    channel: "TechReviewer",
    image: "https://yt3.googleusercontent.com/woMm5Gg0efj1VabHs7LBCLwqNBkzp9Tjf3DND-SbihEkh61KbeXPd_hEOPqzsHza_xghSOrT=s160-c-k-c0x00ffffff-no-rj",
    rating: 5,
    text: "C'est parfait, très content du résultat.Je reviens vers vous prochainement. Probablement que je vais changer les miniatures des premières vidéos pour garder une cohérence."
  },
  {
    name: "Sarah Williams",
    channel: "Gaming Pro",
    image: "https://yt3.googleusercontent.com/EbCyZuun6Hz6sJApd6LlPuQ_qTyt_jQiy5RATXxv-QWNxzlx7NfkmUDEWQoMqvLwGOUfWWON=s160-c-k-c0x00ffffff-no-rj",
    rating: 5,
    text: "The thumbnails are absolutely stunning! They perfectly capture the excitement of my gaming content while maintaining my brand identity. Worth every penny!"
  },
  {
    name: "Michael Chen",
    channel: "Travel Vlogger",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "I was struggling to get views despite having great content. MiniaMaker's thumbnails made all the difference - my videos now regularly hit the recommended section!"
  },
  {
    name: "Emma Rodriguez",
    channel: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4,
    text: "The A/B testing option was a game-changer for my fitness channel. We discovered what really works for my audience, and my engagement has never been better."
  },
  {
    name: "David Kim",
    channel: "Cooking Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Professional, fast, and incredibly talented. My cooking videos now look as appetizing in the thumbnails as they do in the videos themselves!"
  },
  {
    name: "Olivia Taylor",
    channel: "Beauty Guru",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "I've tried other thumbnail services before, but none compare to MiniaMaker. They truly understand what works on YouTube and how to make content stand out."
  }
];

const Testimonials = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.querySelector('.testimonials-container');
      if (container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        setScrollPosition((prev) => {
          const newPosition = prev + 1;
          if (newPosition >= maxScroll) {
            return 0;
          }
          return newPosition;
        });
        container.scrollTo({ left: scrollPosition });
      }
    }, 10);

    return () => clearInterval(interval);
  }, [scrollPosition]);

  return (

    <section id="testimonials" ref={ref} className="py-20 bg-muted/50">
      <div className="container mx-auto ">

        <h2 className="text-2xl md:text-4xl text-center font-bold mb-12">
          Ce que disent <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">nos Clients</span>
        </h2>
        <div className="testimonials-container flex overflow-x-hidden space-x-6 pb-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex-shrink-0 w-96 p-6 rounded-2xl">
              <div className="flex items-center">
  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-full h-full object-cover"
    />
  </div>
  <div>
    <h3 className="font-semibold">{testimonial.name}</h3>
    {/* <p className="text-sm text-muted-foreground">{testimonial.channel}</p> */}
  </div>
</div>

              {/* <div className="flex items-center space-x-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div> */}
              <p className=" text-muted-foreground pt-4">{testimonial.text}</p>

            </Card>
          ))}
        </div>
      </div>
    </section>
    // <section id="testimonials" ref={ref} className="py-20 relative">
    //   {/* Decorative background element */}
    //   <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>

    //   <div className="container mx-auto px-4">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    //       transition={{ duration: 0.6 }}
    //       className="text-center max-w-3xl mx-auto mb-16"
    //     >
    //       <h2 className="text-3xl md:text-4xl font-bold mb-4">
    //         Ce que pensent <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">nos Clients</span>
    //       </h2>
    //       {/* <p className="text-muted-foreground text-lg">
    //       Écoutez les créateurs de contenu qui ont essayer nos miniatures
    //       </p> */}
    //     </motion.div>

    //     <div className="relative">
    //       <div className="overflow-hidden">
    //         <div 
    //           className="flex transition-transform duration-500 ease-in-out"
    //           style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
    //         >
    //           {testimonials.map((testimonial, index) => (
    //             <motion.div
    //               key={index}
    //               initial={{ opacity: 0, y: 20 }}
    //               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    //               transition={{ duration: 0.6, delay: index * 0.1 }}
    //               className={`px-4 flex-shrink-0`}
    //               style={{ width: `${100 / itemsToShow}%` }}
    //             >
    //               <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-shadow">
    //                 <CardContent className="p-6">
    //                   <div className="flex items-center mb-4">
    //                     <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
    //                       <img 
    //                         src={testimonial.image} 
    //                         alt={testimonial.name} 
    //                         className="w-full h-full object-cover"
    //                       />
    //                     </div>
    //                     <div>
    //                       <h3 className="font-semibold">{testimonial.name}</h3>
    //                       {/* <p className="text-sm text-muted-foreground">{testimonial.channel}</p> */}
    //                     </div>
    //                   </div>

    //                   {/* <div className="flex mb-4">
    //                     {[...Array(5)].map((_, i) => (
    //                       <Star 
    //                         key={i} 
    //                         className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
    //                       />
    //                     ))}
    //                   </div> */}

    //                   <p className="text-muted-foreground">"{testimonial.text}"</p>
    //                 </CardContent>
    //               </Card>
    //             </motion.div>
    //           ))}
    //         </div>
    //       </div>

    //       <button 
    //         onClick={handlePrev}
    //         className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-2 text-foreground hover:bg-card transition-colors z-10"
    //         aria-label="Previous testimonial"
    //       >
    //         <ChevronLeft className="h-6 w-6" />
    //       </button>

    //       <button 
    //         onClick={handleNext}
    //         className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-2 text-foreground hover:bg-card transition-colors z-10"
    //         aria-label="Next testimonial"
    //       >
    //         <ChevronRight className="h-6 w-6" />
    //       </button>
    //     </div>
    //   </div>
    // </section>


  );
};

export default Testimonials;