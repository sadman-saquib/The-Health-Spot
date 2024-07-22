import React from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { FaCalendar } from 'react-icons/fa'
import Footer from '../Footer/Footer'
import Programs_Home from '../Programs/Programs_Home'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Testimonials from '../Testimonials/Testimonials'
// import './Hero.css'

const Hero = () => {
  return (
    <motion.section
    initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:0, duration:0.3, ease:"easeIn"}
      }}
    className='py-12 xl:py-0'
    >
    {/* Hero Section */}
    <section className='min-h-[90vh] flex items-center justify-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-8'>
        <div className='flex flex-col xl:w-[54%] order-2 xl:order-none '>
          <p className="text-7xl font-[700] tracking-tighter">Hi, I'm Sufia Ahmed.</p>
          <p className="text-xl mb-12 mt-3">Eat Real Food. Rediscover Yourself</p>
          <div>
            <Button className='px-10 py-7 rounded-2xl text-md gap-1 bg-accent hover:bg-light_accent text-secondary'><FaCalendar/>Book Appointment</Button>
          </div>
        </div>
        <div className="order-1 flex-1 flex justify-center items-center xl:order-none">
            <div>Image</div>
        </div>
      </div>
    </div>
    </section>
    
    {/* About Section */}
    <div><About></About></div>

    {/* Programs Section */}
    <div><Programs_Home></Programs_Home></div>

    {/* Testimonials Section */}
    <div><Testimonials></Testimonials></div>
    
    {/* Contact Section */}
    <div className='mb-12'><Contact></Contact></div>

    </motion.section>
  )
}

export default Hero
