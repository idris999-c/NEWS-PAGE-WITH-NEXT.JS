"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineLogin } from "react-icons/hi";

const Navbar = () => {
    const [] = useState(false); // useState is used here, but the state variable is not defined yet

    return (
        <header className="flex items-center justify-between bg-gray-50 px-10 py-8 w-full relative">
            {/* Logo */}
            <span className="text-3xl text-black-blue-heavy">RİSCK</span>

            {/* Navigation Links */}
            <nav>
                <ul className="flex items-center justify-center space-x-24">
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/Navbar/about">ABOUT</Link></li>
                    <li><Link href="/Navbar/contact">CONTACT</Link></li>
                    <li><Link href="/Navbar/services">SERVICES</Link></li>
                </ul>
            </nav>

            {/* Login Icon */}
            <div className="space-x-4">
                <a href="/Navbar/login">
                    <HiOutlineLogin className="w-6 h-6" />
                </a>
            </div>

        </header >
    );
};

export default Navbar;
