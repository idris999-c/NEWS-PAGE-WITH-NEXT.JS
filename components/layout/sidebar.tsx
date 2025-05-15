// components/Sidebar.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

type SidebarProps = {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ menuOpen, setMenuOpen }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div
            ref={menuRef}
            className={`fixed top-0 left-0 h-full w-48 z-20 bg-gray-200 shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out md:hidden`}
        >
            <span className="text-3xl text-black-blue-heavy">RİSCK</span>
            <ul className="flex flex-col items-start p-6 space-y-6 ">
                <li>
                    <a
                        className=" hover:px-4 hover:py-2 hover:border-2  transition-all duration-300 relative before:content-['›'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100"
                        href="/Navbar/services"
                        onClick={() => setMenuOpen(false)}
                    >
                        WORLD NEWS
                    </a>
                </li>
                <li>
                    <a
                        className=" hover:px-4 hover:py-2 hover:border-2  transition-all duration-300 relative before:content-['›'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100"
                        href="/Navbar/about"
                        onClick={() => setMenuOpen(false)}
                    >
                        ABOUT
                    </a>
                </li>
                <li>
                    <a
                        className=" hover:px-4 hover:py-2 hover:border-2  transition-all duration-300 relative before:content-['›'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100"
                        href="/Navbar/contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        CONTACT US
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;
