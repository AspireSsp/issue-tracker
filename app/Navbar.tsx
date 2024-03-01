import Link from 'next/link'
import React from 'react'
import { BsBug } from "react-icons/bs";
const navLinks = [
    {label: "Dashbord", href:"/"},
    {label: "Issues", href:"/issues"},
];
const Navbar = () => {

    return (
        <nav className='flex space-x-6 border-b px-8 h-16 items-center mb-4'>
            <Link href={'/'} ><BsBug className='text-4xl' /></Link>
            <ul className='flex space-x-6'>
                {
                    navLinks.map((link)=>(
                        <li>
                            <Link 
                                className='text-zinc-600 hover:text-zinc-950 transition-colors' 
                                href={link.href}> {link.label} </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar