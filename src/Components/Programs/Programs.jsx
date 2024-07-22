import React from 'react'
import { animate, motion } from 'framer-motion'
import { FaWeight } from 'react-icons/fa'
import { GiBiceps } from "react-icons/gi";

const program = [
  { 
    icon: <FaWeight></FaWeight>,
    name: "WeightLoss",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus expedita dolores dicta excepturi, libero earum.",
  },
  { 
    icon: <GiBiceps/>,
    name: "WeightGain",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus expedita dolores dicta excepturi, libero earum.",
  },
  { 
    icon: <FaWeight></FaWeight>,
    name: "Diabetes",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus expedita dolores dicta excepturi, libero earum.",
  },
  { 
    icon: <FaWeight></FaWeight>,
    name: "PCOS",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus expedita dolores dicta excepturi, libero earum.",
  },
  { 
    icon: <FaWeight></FaWeight>,
    name: "Hypertension",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus expedita dolores dicta excepturi, libero earum.",
  },
  { 
    icon: <FaWeight></FaWeight>,
    name: "Uric Acid",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus expedita dolores dicta excepturi, libero earum.",
  },
  { 
    icon: <FaWeight></FaWeight>,
    name: "High Protein Diet",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus expedita dolores dicta excepturi, libero earum.",
  },
  { 
    icon: <FaWeight></FaWeight>,
    name: "Renal Diet",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus expedita dolores dicta excepturi, libero earum.",
  },
  { 
    icon: <FaWeight></FaWeight>,
    name: "Gluten-Free Diet",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus expedita dolores dicta excepturi, libero earum.",
  },
] 

const Programs = () => {
  return (
    <motion.section
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:0, duration:0.3, ease:"easeIn"}
      }}
      className='min-h-[80vh] justify-center items-center py-12 xl:py-6'
    >
    <div className='container mx-auto flex flex-col gap-[30px] mb-[40px]'>
      <div>
      <h1 className='text-5xl font-bold tracking-tighter'>Programs we offer</h1>
      </div>
      <div>
        <p className='leading-tight text-secondary/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque</p>
      </div>
      <div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
          {program.map((prog,index)=>{
            return(
              <li key={index} 
              className='bg-pentane text-secondary px-14 py-16 rounded-xl h-[350px] flex flex-col items-center justify-center md:justify-start md:items-start gap-5'
              >
                {/* <p>{prog.icon}</p> */}
                <h1 className='text-4xl font-bold md:text-start tracking-tighter'>{prog.name}</h1>
                <p  className='text-center md:text-left max-w-[250px] leading-tight text-secondary/60'>{prog.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    </motion.section>
  )
}

export default Programs
