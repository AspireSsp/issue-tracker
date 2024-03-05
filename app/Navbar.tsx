"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { BsBug } from "react-icons/bs";
import classNames from 'classnames';

const navLinks = [
    {label: "Dashbord", href:"/"},
    {label: "Issues", href:"/issues"},
];
const Navbar = () => {
    const currentPath = usePathname();
    return (
        <nav className='flex space-x-6 border-b px-8 h-16 items-center mb-4'>
            <Link href={'/'} ><BsBug className='text-4xl' /></Link>
            <ul className='flex space-x-6'>
                {
                    navLinks.map((link)=>(
                        <li>
                            <Link 
                                key={link.href}
                                className={classNames({
                                    "text-zinc-500" : currentPath!==link.href,
                                    "text-zinc-950" : currentPath===link.href,
                                    'hover:text-zinc-950 transition-colors' : true
                                })}
                                href={link.href}> {link.label} </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar