import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/About",
  },
  {
    name: "Programs",
    path: "/Programs",
  },
  {
    name: "Shop",
    path: "/Shop",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
  {
    name: "Book Appointment",
    path: "/BookAppointment",
  },
]

const Navbar = () => {
  return (
    <nav className='flex gap-8 items-center text-sm'>
      {links.map((link, index)=>{
        return(
          <NavLink 
          to={link.path} 
          key={index}
          className={({ isActive }) =>
            `${isActive ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all`
          }
          >
              {link.name}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default Navbar
