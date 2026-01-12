"use client"

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample thumbnail data
const thumbnailRows = [
  [
    "https://lh3.googleusercontent.com/d/1rPvD_8H8YMRswekRBTrcLVQ4AVYKobon",
    "https://lh3.googleusercontent.com/d/11-YXa9VcwqtTicN3UW2qBPgPlzqBWMcK",
    "https://lh3.googleusercontent.com/d/1PhOzzCrXbddLi8fDH5Bjk7SPBOsudzrP",

    "https://lh3.googleusercontent.com/d/1f4KRudb0Cc15P79Ehx6djTdPVFrbt1nB",
    "https://lh3.googleusercontent.com/d/1p_u9YL_TAj2LiLFyq36UNlPh1M9FdTaA",
    "https://lh3.googleusercontent.com/d/1Ilfg7Xft8Wtlo_m2cchI-yP7imvk5fnX",

  ],
  [
    "https://lh3.googleusercontent.com/d/1IZekqlZAi3d1itSjR3ip6odvhG5GYXw5",
    "https://lh3.googleusercontent.com/d/1NLRHVT2UWeqgAV1KG-3ERQ6H7PfvEx_n",
    // "https://lh3.googleusercontent.com/d/1dzTZCQOzt6xvheyudmk7N04gnnN7h4ZQ", //coaching bleu
    "https://lh3.googleusercontent.com/d/1HSj2BQ7Q4IyPZXuMtkTw4N0fKRiFomjN",
    "https://lh3.googleusercontent.com/d/1v4kygFhSL6rZ1iH18arqXByPiXnUqDcB",
    // "https://lh3.googleusercontent.com/d/1X48JWLuJFQDrPDIhYkvna9oqeBe4i8z4",



    "https://lh3.googleusercontent.com/d/10ET_CFSmqej-f5RfehWNxPeobwtZIzRX",
    "https://lh3.googleusercontent.com/d/14C4XT2UWRPfI46Ofm1VBj34Nviq5FWJW",
  ],
  [

    //"https://lh3.googleusercontent.com/d/1_DG9bXStZ_s1JdcoVJMNG4eWN05EG6O7", //coaching orange 

    //"https://lh3.googleusercontent.com/d/1y0j2fGi3JcvKsRNkO03OZfS60I2Q424c", //coaching plein gaz
    "https://lh3.googleusercontent.com/d/1dzTZCQOzt6xvheyudmk7N04gnnN7h4ZQ", //coaching bleu
    //"https://lh3.googleusercontent.com/d/1FZ0Sq32fJ1bfU1vCKJ6Q3cb9NostMa3K", 
    "https://lh3.googleusercontent.com/d/182LOCKS426efyJSlKOHGehRpKsrO0Vvm",
    "https://lh3.googleusercontent.com/d/1jhMos64h0yH4Oc7L4U_mZ3cVEAN9Z8Tr", //legend
    "https://lh3.googleusercontent.com/d/11JyjfE2TKW4SV-2IYU5_sx7_8fCVEto6",
     
    "https://lh3.googleusercontent.com/d/1uBUmwGMAi75J1SwKuo_HgOG-nuWvo-Pc",
    "https://lh3.googleusercontent.com/d/1v4kygFhSL6rZ1iH18arqXByPiXnUqDcB",
    "https://lh3.googleusercontent.com/d/1NIj0K9Jnf839ZwYSlxypOvwIYmlHkNaO",

  ],

  [
    //"https://lh3.googleusercontent.com/d/19hgkUCVMktKoFq1LT8pDDgBcgQ2wvwIM",
    //"https://lh3.googleusercontent.com/d/1y0j2fGi3JcvKsRNkO03OZfS60I2Q424c", //coaching plein gaz
    "https://lh3.googleusercontent.com/d/1FdEIkAJ8aEIlxlZxL4XfTnLB4FRQtUmM",
    "https://lh3.googleusercontent.com/d/1nhpEkFWAfarfvY9iGlD-Nc85xQed1UO4",
    // "https://lh3.googleusercontent.com/d/1iXrofcnA2iCMubyqJGIuA_ErGBoJ_9uN",
    "https://lh3.googleusercontent.com/d/163cPv0iknVSATdqL_MQE5F5MhTkBGbWd",
    "https://lh3.googleusercontent.com/d/1NIj0K9Jnf839ZwYSlxypOvwIYmlHkNaO",
    
    "https://lh3.googleusercontent.com/d/1vhwyTSJqLsJ5Nzan0AtgDhe8rAPusthY",
    "https://lh3.googleusercontent.com/d/17G1zYEIIra1EEJm4A4k_L1Xt0fHka1TH",


    // 1nhpEkFWAfarfvY9iGlD-Nc85xQed1UO4
    // 1FavV-bfZ6Cxg8ZwbkMD95FuJVA8QZkAg    ia mac 
    // 12C5SFejEvJCS89SuKti8iUcvVcAM_bQS   barack 
  ],
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // References for each row
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.querySelector('.carte-container');
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


  // useEffect(() => {
  //   const animateRow = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right', speed: number) => {
  //     if (!ref.current) return;

  //     const scrollWidth = ref.current.scrollWidth;
  //     const viewportWidth = ref.current.offsetWidth;

  //     if (scrollWidth <= viewportWidth) return;

  //     const duration = scrollWidth / speed * 1000; // milliseconds
  //     const keyframes = [
  //       { transform: 'translateX(0%)' },
  //       { transform: 'translateX(-50%)' }
  //     ];

  //     // const keyframes = direction === 'left' 
  //     //   ? [
  //     //       { transform: 'translateX(0)' },
  //     //       { transform: `translateX(-${scrollWidth - viewportWidth}px)` }
  //     //     ]
  //     //   : [
  //     //       { transform: `translateX(-${scrollWidth - viewportWidth}px)` },
  //     //       { transform: 'translateX(0)' }
  //     //     ];

  //     const animation = ref.current.animate(keyframes, {
  //       duration,
  //       iterations: Infinity,
  //       easing: 'linear'
  //     });

  //     return animation;
  //   };

  // const row1Animation = animateRow(row1Ref, 'left', 30);
  // const row2Animation = animateRow(row2Ref, 'right', 40);
  // const row3Animation = animateRow(row3Ref, 'left', 35);


  // Pause animations when not in view
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           row1Animation?.play();
  //           row2Animation?.play();
  //           row3Animation?.play();
  //         } else {
  //           row1Animation?.pause();
  //           row2Animation?.pause();
  //           row3Animation?.pause();
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     row1Animation?.cancel();
  //     row2Animation?.cancel();
  //     row3Animation?.cancel();
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <section id="portfolio" ref={ref} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 10 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">Realisations</span>
          </h2>
          {/* <p className="text-muted-foreground text-lg">
            Parcourez notre collection de miniatures accrocheuses qui ont aidé les YouTubeurs à augmenter leurs taux de clics et à développer leurs chaînes.
          </p> */}
        </motion.div>
      </div>

      <div className="space-y-8">

        {/* Row 1 */}
        <div className="carte-container flex overflow-x-hidden space-x-6 pb-4">
          {[...thumbnailRows[0], ...thumbnailRows[0]].map((thumbnail, index) => (

            <div
              key={`row1-${index}`}
              className="flex-shrink-0 relative w-80 h-44 rounded-lg overflow-hidden border border-border/50 shadow-lg"
            >
              <img
                src={thumbnail}
                alt={`Thumbnail  ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Row 2 */}
        <div className="testimonials-container flex overflow-x-hidden space-x-6 pb-4">
          {[...thumbnailRows[1], ...thumbnailRows[1]].map((thumbnail, index) => (

            <div
              key={`row1-${index}`}
              className="flex-shrink-0 relative w-780 h-44 rounded-lg overflow-hidden border border-border/50 shadow-lg"
            >
              <img
                src={thumbnail}
                alt={`Thumbnail  ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="carte-container flex overflow-x-hidden space-x-6 pb-4">
          {[...thumbnailRows[2], ...thumbnailRows[2]].map((thumbnail, index) => (

            <div
              key={`row3-${index}`}
              className="flex-shrink-0 relative w-80 h-44 rounded-lg overflow-hidden border border-border/50 shadow-lg"
            >
              <img
                src={thumbnail}
                alt={`Thumbnail  ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="carte-container flex overflow-x-hidden space-x-6 pb-4">
          {[...thumbnailRows[3], ...thumbnailRows[3]].map((thumbnail, index) => (

            <div
              key={`row3-${index}`}
              className="flex-shrink-0 relative w-80 h-44 rounded-lg overflow-hidden border border-border/50 shadow-lg"
            >
              <img
                src={thumbnail}
                alt={`Thumbnail  ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>


        {/* Row 1 */}
        {/* <div className="carte-container overflow-x-hidden space-x-6 pb-4">
          <div ref={row1Ref} className="flex gap-6 py-2 min-w-max ">
            {[...thumbnailRows[0], ...thumbnailRows[0]].map((thumbnail, index) => (

              <div
                key={`row1-${index}`}
                className="flex-shrink-0 relative w-72 h-44 rounded-lg overflow-hidden border border-border/50 shadow-lg"
              >
                <img
                  src={thumbnail}
                  alt={`Thumbnail  ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div> */}


      </div>


    </section>
  );
};

export default Portfolio;


{/* <div className="container mx-auto px-4 mt-16 text-center">
        <Button 
          variant="outline" 
          className="border-blue-500/20 hover:bg-blue-500/10"
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
          Pret a booster votre CTR?
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div> */}