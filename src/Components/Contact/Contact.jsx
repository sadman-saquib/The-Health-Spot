import React from 'react'
import { motion } from 'framer-motion'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Footer from '../Footer/Footer'

const info = {
  title: "Info",
  description: "Lorem Ipsum",
  items:[
    {
      icon: <FaPhoneAlt/>,
      title: 'Phone',
      description: '+91 XXXX XXXXX',
    },
    {
      icon: <FaEnvelope/>,
      title: 'Email',
      description: 'thehealthspot5905@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt/>,
      title: 'Address',
      description: 'address',
    },
  ]
}

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity:1,
        transition: {delay:0, transition: 0.3, ease:"easeIn"}
      }}
      className='py-6' 
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form action="" className='flex flex-col gap-6 px-10 py-12 bg-pentane rounded-xl'>
              <h1 className='text-4xl font-bold tracking-tighter'>Connect with us</h1>
              <div>
              <p className='text-secondary/60 text-sm w-[100%]'>Have questions or seeking personalized advice?</p>
              <p className='text-secondary/60 text-sm w-[100%] mb-6'>Feel free to reach out to our team.
              We value your feedback and are here to support you on your wellness journey.</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <Input type="text" placeholder='Firstname'/>
              <Input type="text" placeholder='Lastname'/>
              <Input type="email" placeholder='Email'/>
              <Input type="tel" placeholder='Phone number'/>
              </div>
              <Textarea name="" id="" placeholder='Enter your message' className='h-[200px]'></Textarea>
              <Button className='bg-accent hover:bg-light_accent text-secondary gap-1'><FaPaperPlane></FaPaperPlane>Send Message</Button>
            </form>
          </div>

          {/* Infor */}
          <div className='flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0'>
            {/* <h1>{info.title}</h1>
            <p>{info.description}</p> */}
            <ul className='flex flex-col gap-5 md:gap-8'>
              {info.items.map((item, index)=>{
                return(
                  <li key={index}  className='flex items-center gap-4'>
                    <div className='w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] bg-secondary text-pentane rounded-full flex items-center justify-center'>
                      <div className='text-[24px] xl:text-[24px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <h1 className='text-black/60 text-sm md:text-md'>{item.title}</h1>
                      <p className='text-lg md:text-xl font-bold'>{item.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Footer */}
    </motion.section>
  )
}

export default Contact
