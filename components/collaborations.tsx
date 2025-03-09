"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const creators = [
  {
    name: "Pierre-Yves Meyer",
    subscribers: "1.2M",
    image: "https://yt3.googleusercontent.com/woMm5Gg0efj1VabHs7LBCLwqNBkzp9Tjf3DND-SbihEkh61KbeXPd_hEOPqzsHza_xghSOrT=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "Florian Gaudre",
    subscribers: "850K",
    image: "https://yt3.googleusercontent.com/adIGSkHVtHpabZJ2KD_19yzNQQJGhM7l7bdzyeWGFUprdCivh_c8S48O8oiFJXmg3s1bWxgsZg=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "TravelVlogger",
    subscribers: "2.5M",
    image: "https://yt3.googleusercontent.com/d2q_vp_hloI_-ZDdCbhxeC0j5WpsNCjOOZcVJ-rVIY8t7qqdQzDYJBxxTVXb2XwZZOzduC4D5A=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "FitnessCoach",
    subscribers: "1.8M",
    image: "https://yt3.googleusercontent.com/ZiwRR9dkf-nNDgVRfvQMdwss6GsIl4yR0vTLau_txClJWN-ZpDm-gca2omsAEvNDOB_Ss_egzA=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "CookingExpert",
    subscribers: "3.2M",
    image: "https://yt3.googleusercontent.com/aA_aJqi7EO-6nmocjkKHLdaW0xJ-jg0O5N3Rjtu_bmhMm9ClchDpmk7EH3agMNhKjADlxQV9_Q=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "CookingExpert",
    subscribers: "3.2M",
    image: "https://yt3.ggpht.com/LrxD7CAFpYZt3VE79Zk44rS_xRxJfYfwfX2dob6iY1wA_HchuClXwX6qLL5eoH4lnmpa6BUOig=s176-c-k-c0x00ffffff-no-rj-mo"
  },
  {
    name: "BeautyGuru",
    subscribers: "4.7M",
    image: "https://yt3.googleusercontent.com/PnDgSmTHKkb62syZsIMHd-ZxuZkaFBZcLPzA1usZ3Euk6GnHse75HxBeXSBqaHeVAUwG3Rcjruo=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "CookingExpert",
    subscribers: "3.2M",
    image: "https://yt3.ggpht.com/h6GDRGctiySML0ZBijYbycbYgcAen-BZhlyNoYr8E5SoJyGP7HGlZ7O-1gDeDk8IFZAN6Yl5xLU=s176-c-k-c0x00ffffff-no-rj-mo"
  },
];

const Collaborations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  return (
    <section ref={ref} className=" relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">
           Nos <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">Collaborations</span>
          </h2> */}
          {/* <p className="text-muted-foreground text-xl">
            Ils nous ont fait confiance
          </p> */}
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-8 mx-36">
          {creators.map((creator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="w-20 h-20 rounded-full overflow-hidden ">
                <CardContent className="p-0">
                <div className="w-20 h-20 rounded-full overflow-hidden ">
                          <img 
                            src={creator.image} 
                            alt={creator.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          {/* <p className="text-lg text-muted-foreground">
          Rejoignez notre liste croissante de créateurs satisfaits qui ont connu une croissance significative après avoir travaillé avec nous
          </p> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborations;