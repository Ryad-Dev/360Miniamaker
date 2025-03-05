"use client"

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample thumbnail data
const thumbnailRows = [
  [
    "https://lh3.googleusercontent.com/d/1XObNJvjyQGh4iXhB7nVyp6RA2y6Gu1XA",
    "https://lh3.googleusercontent.com/d/19hHxhA6MAaQmloXlAHAx6AUxIUwR_ws-",
    "https://lh3.googleusercontent.com/d/1HPHE1EuG-Ev-L1Y6Xqap254AeA80vzLs",
    "https://lh3.googleusercontent.com/d/1kx9xpK0UNpyunfx6CXAV172QTrd4N8OR",
    "https://lh3.googleusercontent.com/d/1KSYyaNfYKVNwAaB3GHjQezv1b9fv-w5a",
    "https://lh3.googleusercontent.com/d/1cPdy9ipU8FOn7P0AqkrwWSoUyQmSarvd",
  ],
  [
    "https://lh3.googleusercontent.com/d/1nRXqZG7Ex4lAGt2p1cMYaNizIIniX6av",
    "https://lh3.googleusercontent.com/d/1SnAjricSOdPSe9Y8mqKmgHb1wGepH2i1",
    "https://lh3.googleusercontent.com/d/18Caw8qRabk19YxPLeC62CTybq7oOlMPE",
    "https://lh3.googleusercontent.com/d/1EHDlVkF_q9X2gxR5ix-zsZvP0wD2wwVO",
    "https://lh3.googleusercontent.com/d/1gnHe6cySYhwmRHh6degXLJz-Ua7wCsb_",
    "https://lh3.googleusercontent.com/d/1vJvyzRfPVuYms5ZS65EpQvRuXUS1OfkK",
  ],
  [
    
    "https://lh3.googleusercontent.com/d/1yCWgvWdwGm72LIctS-Qt_tNbfXNTOrb6",
    "https://lh3.googleusercontent.com/d/1d7hxKANLmY3blvCGZ6LhK0cDYKF-YQeK",
    "https://lh3.googleusercontent.com/d/1lbHvxxPYeg0hGWvmrwWSMOPk6dk6BQmv",
    "https://lh3.googleusercontent.com/d/1IMiUARGuYPou4CbeoLhpsdfJyqcMCgIQ",
    "https://lh3.googleusercontent.com/d/1EVEGXt4HY_H-G0J-IvcXKj-llrpmXg76",
    "https://lh3.googleusercontent.com/d/1ag7bKjAi4AWe3hkeUVZlTA3EE0UtCsJn",
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
          {[...thumbnailRows[1], ...thumbnailRows[1]].map((thumbnail1, index) => (

            <div
              key={`row1-${index}`}
              className="flex-shrink-0 relative w-780 h-44 rounded-lg overflow-hidden border border-border/50 shadow-lg"
            >
              <img
                src={thumbnail1}
                alt={`Thumbnail  ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="carte-container flex overflow-x-hidden space-x-6 pb-4">
          {[...thumbnailRows[2], ...thumbnailRows[2]].map((thumbnail2, index) => (

            <div
              key={`row3-${index}`}
              className="flex-shrink-0 relative w-80 h-44 rounded-lg overflow-hidden border border-border/50 shadow-lg"
            >
              <img
                src={thumbnail2}
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