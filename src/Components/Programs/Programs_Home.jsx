import React, { useEffect, useRef } from 'react';
import { animate, motion } from 'framer-motion';
import { FaWeight } from 'react-icons/fa';
import { GiBiceps, GiBlood } from "react-icons/gi";
import { ScrollArea } from '@radix-ui/react-scroll-area';
import VanillaTilt from 'vanilla-tilt';

const program = [
  { 
    img: 'src/assets/measuring-tape_2171870.png',
    name: "WeightLoss",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit..",
  },
  { 
    icon: <GiBiceps />,
    name: "WeightGain",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit..",
  },
  { 
    img: 'src/assets/glucometer_10864026.png',
    name: "Diabetes",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit..",
  },
  { 
    img: '/src/assets/uterus.png',
    name: "PCOS",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit..",
  },
  { 
    img: '/src/assets/hypertension.png',
    name: "Hypertension",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit..",
  },
  { 
    img: '/src/assets/compound.png',
    name: "Uric Acid",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit..",
  },
  { 
    img: '/src/assets/steak.png',
    name: "High Protein Diet",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit..",
  },
  { 
    img: '/src/assets/kidneys.png',
    name: "Renal Diet",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit..",
  },
  { 
    img: '/src/assets/gluten-free.png',
    name: "Gluten-Free Diet",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit..",
  },
];

const Programs_Home = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (cardRefs.current) {
      cardRefs.current.forEach((card) => {
        if (card) {
          VanillaTilt.init(card, {
            reverse: true,
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
          });
        }
      });
    }

    // Clean up
    return () => {
      cardRefs.current.forEach((card) => {
        if (card && card.vanillaTilt) {
          card.vanillaTilt.destroy();
        }
      });
    };
  }, [program]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.3, ease: "easeIn" },
      }}
      className='min-h-[80vh] justify-center items-center py-12 xl:py-6 z-0'
    >
      <div className='container mx-auto flex flex-col gap-[30px] mb-[40px]'>
        <div>
          <h1 className='text-4xl font-bold tracking-tighter'>Programs we offer</h1>
        </div>
        <div>
          <p className='leading-tight text-secondary/60'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          </p>
        </div>
        <ScrollArea className='h-[400px] overflow-auto p-8 bg-gradient-to-br from-pentane to-pentane rounded-3xl'>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
            {program.map((prog, index) => (
              <li
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className='relative bg-secondary drop-shadow-xl border-l border-t border-white/30 text-primary hover:text-accent transition duration-100 ease-in px-14 py-16 rounded-xl h-[250px] flex flex-col items-center justify-center md:justify-start md:items-start gap-5 overflow-hidden'
            >
              <div className='absolute -bottom-8 -left-8 w-[200px] opacity-15'>
                <img src={prog.img} alt="" className='w-full h-full object-cover invert' />
              </div>
              <p className='text-[200px] absolute -bottom-3 -left-3 text-pentane/15'>{prog.icon}</p>
              <h1 className='relative text-4xl font-bold md:text-start tracking-tighter pointer-events-none'>
                {prog.name}
              </h1>
              {/* <p className='text-center md:text-left max-w-[250px] leading-tight text-secondary/60'>{prog.description}</p> */}
            </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </motion.section>
  );
};

export default Programs_Home;
