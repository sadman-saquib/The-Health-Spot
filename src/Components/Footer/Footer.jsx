import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from "/src/assets/favicon.png"
// import './Footer.css'

const top = [
    {
        title: "Quick Links",
        items: [
            {
                name: "About us",
                path: "/About",
            },
            {
                name: "Contact us",
                path: "/Contact",
            }
        ]
    },
    {
        title: "Product",
        items: [
            {
                name: "12 Month Program",
                path: "/",
            },
            {
                name: "9 Month Program",
                path: "/",
            },
            {
                name: "6 Month Program",
                path: "/",
            },
            {
                name: "90 Day Program",
                path: "/",
            },
        ]
    },
    {
        title: "Legal",
        items: [
            {
                name: "Privacy Policy",
                path: "/",
            },
            {
                name: "Terms & Conditions",
                path: "/",
            }
        ]
    },
    {
        title: "Dashboard",
        items: [
            {
                name: "My Account",
                path: "/MyAccount",
            },
            {
                name: "Cart",
                path: "/Cart",
            },
            {
                name: "Checkout",
                path: "/Checkout",
            }
        ]
    },
]

const bottomLinks = [
    {   
        name: "Instagram",
        icon: <FaInstagram></FaInstagram>,
        path: "https://www.instagram.com/thehealthspot5905/"
    },
    {   
        name: "Facebook",
        icon: <FaFacebook></FaFacebook>,
        path: "/facebook.com"
    },
    {   
        name: "LinkedIn",
        icon: <FaLinkedin></FaLinkedin>,
        path: "/linkedin.com"
    },
    {   
        name: "Location",
        icon: <FaMapMarkerAlt></FaMapMarkerAlt>,
        path: "/maps.google.com"
    },
]

const Footer = () => {
  return (
    <section className=' bg-quarternary text-primary'>
    <div className='container mx-auto flex flex-col'>

        {/* Upper div */}
        <div className='flex flex-col lg:flex-row justify-between py-[96px] items-center lg:items-start'>
            <div className='flex-1 flex gap-4 lg:gap-2 lg:flex-col mb-16 lg:mb-0'>
            <img src={logo} alt="" className='h-[60px] w-[60px] object-cover'/>
            <div>
                <h1 className='text-3xl font-bold flex items-center lg:flex-col lg:items-start gap-2'>The Health Spot</h1> 
                <p className='text-primary/60'>Eat Smart, Live Well</p>
            </div>
            </div>
            
            <div className='lg:w-[70%]'>
                <ul className='grid grid-cols-2 lg:flex gap-8 lg:flex-row justify-between'>
                    {top.map((part,index)=>{
                        return(
                            <li key={index}>
                                <p  className='text-sm mb-8'>{part.title}</p>
                                <div>
                                    <ul className='flex flex-col gap-[10px]'>
                                    {part.items.map((links,index)=>{
                                        return(
                                            <li key={index}>
                                                <Link to={links.path} className='text-lg hover:text-accent'>{links.name}</Link>
                                            </li>
                                        )
                                    })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

        {/* Bottom div */}
        <div className='flex flex-col lg:flex-row gap- lg:gap-8 justify-between items-center text-sm py-[32px] border-t border-accent/30'>
            <Link to={'https://portfolio-sadman.vercel.app/'} target="_blank" className='hover:text-accent'>
            <div className='text-center lg:text-left'>
            <p>© 2024 Designed & Developed by</p>
            <p>Sadman Saquib</p>
            </div>
            </Link>
            <p>Terms & Privacy Policy</p>
            <div className>
                <ul className='flex gap-5 mt-10 lg:mt-0'>
                {bottomLinks.map((icons, index)=>{
                    return(
                        <li key={index} className='text-5xl'>
                            <Link to={icons.path} target='blank_' className='hover:text-accent'>
                                {icons.icon}
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>

    </div>
    </section>
  )
}

export default Footer
