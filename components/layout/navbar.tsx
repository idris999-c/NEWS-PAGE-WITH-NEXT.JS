// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineLogin, HiOutlineMenu } from "react-icons/hi";
import Sidebar from "./sidebar";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between bg-gray-50 px-10 py-6 w-full relative">
            {/* Logo */}
            <span className="text-3xl text-black-blue-heavy">RİSCK</span>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
                <ul className="flex items-center space-x-12 sm:space-x-8 md:space-x-6 lg:space-x-24">
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/Navbar/about">ABOUT</Link></li>
                    <li><Link href="/Navbar/contact">CONTACT</Link></li>
                    <li><Link href="/Navbar/services">SERVICES</Link></li>
                </ul>
            </nav>

            {/* Login Icon & Hamburger */}
            <div className="flex items-center space-x-4">
                <a href="/Navbar/login">
                    <HiOutlineLogin className="w-6 h-6" />
                </a>

                {/* Hamburger Menu */}
                <button
                    className="md:hidden"
                    onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(true);
                    }}
                >
                    <HiOutlineMenu className="w-8 h-8" />
                </button>
            </div>

            {/* Sidebar Menu */}
            <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </header>
    );
};

export default Navbar;
