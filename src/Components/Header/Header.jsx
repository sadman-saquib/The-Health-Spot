import React from 'react'
import Navbar from '../Navbar/Navbar'
import MobNav from '../Navbar/MobNav'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../ui/dialog"
import { FaFacebook, FaGoogle, FaApple, FaEllipsisH } from 'react-icons/fa'
import logo from "/src/assets/favicon.png"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../ui/form"
import { Input } from "../ui/input"



const icons = [
    {
        name: "Google",
        icon: <FaGoogle></FaGoogle>
    },
    {
        name: "Facebook",
        icon: <FaFacebook></FaFacebook>
    },
    {
        name: "Apple",
        icon: <FaApple></FaApple>
    },
    {
        name: "More",
        icon: <FaEllipsisH></FaEllipsisH>
    },
]

const Header = () => {
  return (
    <header className='py-8 xl:py-4 bg--primary/30 backdrop-blur-lg fixed w-[100vw] z-50'>
    <div className='container mx-auto flex justify-between items-center'>
        <div>
            <Link to="/">
                <h1 className='text-4xl flex items-center gap-3'><img src={logo} alt="" className='h-[40px]'/>
                <p className='text-3xl font-bold tracking-tighter'>Logo</p>
                </h1>
            </Link>
        </div>
        <div className='hidden xl:flex'>
            <Navbar></Navbar>
        </div>
        <div className='md:hidden'>
            <MobNav></MobNav>
        </div>
        <div className='flex gap-2'>
        
        {/* Login */}
        <Dialog>
            <DialogTrigger>
                <Button className='w-[90px] font-semibold text-tertiary border-tertiary border-[1.5px] bg-primary/30 hover:bg-pentane'>LogIn</Button>
            </DialogTrigger>
            <DialogContent className='px-10 py-12 md:max-w-md gap-8'>
                <DialogHeader>
                <DialogTitle className='text-4xl mb-4 flex gap-2 items-center'><img src={logo} alt="" className='h-[50px] object-cover'/>Login</DialogTitle>
                {/* <DialogDescription>Lorem Ipsum Lora Lesun</DialogDescription> */}
                </DialogHeader>
                
                {/* Form */}
                <form action="" className='flex flex-col gap-4'>
                    <div>
                    {/* <label htmlFor="" className='text-white/60 text-sm'>Username</label> */}
                    <Input type='text' placeholder='Username'></Input>
                    </div>
                    <div>
                        {/* <label htmlFor="" className='text-white/60 text-sm'>Password</label> */}
                        <Input type='password' placeholder='Password'></Input>
                    </div>
                    <Button className='bg-accent hover:bg-[#6fcfaa] text-secondary font-bold mt- max-md:w-[4]'>Log In</Button>
                    <div className='flex justify-between text-black/60 text-md'>
                        <p>Forgot password?</p>
                        <p>Sign Up</p>
                    </div>
                </form>

                {/* Dialog footer */}
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-center text-black/40'><p>or you can sign in with</p></div>
                    <div>
                        <ul  className='flex justify-center gap-4'>
                            {icons.map((list,index)=>{
                                return(
                                    <li key={index} className='bg-white/60  hover:bg-accent hover:text-black rounded-full p-2 text-lg'>
                                        {list.icon}
                                    </li>   
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
        
        {/* SignUp */}
        <Dialog>
            <DialogTrigger>
                <Button className='w-[90px] font-semibold text-primary bg-tertiary hover:bg-quarternary'>SignUp</Button>
            </DialogTrigger>
            <DialogContent className='px-10 py-12 gap-8'>
                <DialogHeader>
                <DialogTitle className='text-4xl mb-4 flex  gap-2 items-center'><img src={logo} alt="" className='h-[50px] object-cover'/>SignUp</DialogTitle>
                {/* <DialogDescription>Lorem Ipsum Lora Lesun</DialogDescription> */}
                </DialogHeader>
                
                {/* Form */}
                <form action="" className='flex flex-col gap-4'>
                    <div>
                        {/* <label htmlFor="" className='text-white/60 text-sm'>Username</label> */}
                        <Input type='text' placeholder='Username'></Input>
                    </div>
                    <div>
                        {/* <label htmlFor="" className='text-white/60 text-sm'>Password</label> */}
                        <Input type='password' placeholder='Password'></Input>
                    </div>
                    <div>
                        {/* <label htmlFor="" className='text-white/60 text-sm'>Confirm Password</label> */}
                        <Input type='password' placeholder='Confirm Password'></Input>
                    </div>
                    <div>
                        {/* <label htmlFor="" className='text-white/60 text-sm'>E-mail Address</label> */}
                        <Input type='email' placeholder='E-mail'></Input>
                    </div>
                    <Button className='bg-accent hover:bg-[#6fcfaa] text-secondary font-bold mt- max-md:w-[4]'>Sign Up</Button>
                    <div className='flex justify-center text-black/60 gap-1'>
                        <p>Already have an account?</p>
                        <p>Log In</p>
                    </div>
                </form>

                {/* Dialog footer */}
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-center text-black/40'><p>or you can sign in with</p></div>
                    <div>
                        <ul  className='flex justify-center gap-4'>
                            {icons.map((list,index)=>{
                                return(
                                    <li key={index} className='bg-white/60 hover:bg-accent hover:text-black rounded-full p-2 text-lg'>
                                        {list.icon}
                                    </li>   
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
        </div>
    </div>
    </header>
  )
}

export default Header
