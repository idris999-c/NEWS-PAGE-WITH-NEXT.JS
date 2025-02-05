import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <hr />
            <footer className="text-black bg-gray-50 py-4">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
                    {/* About */}
                    <div>
                        <h3 className="text-base font-semibold mb-3 underline">About</h3>
                        <p className="text-xs leading-snug">
                            This website aims to provide the latest news in an unbiased manner.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-semibold mb-3 underline">Quick Links</h3>
                        <ul className="space-y-1">
                            <li><Link href="/" className="hover:underline text-sm">Home</Link></li>
                            <li><Link href="/Navbar/about" className="hover:underline text-sm">About</Link></li>
                            <li><Link href="/Navbar/contact" className="hover:underline text-sm">Contact</Link></li>
                            <li><Link href="/Navbar/services" className="hover:underline text-sm">Services</Link></li>
                            <li><Link href="/Navbar/privacy-policy" className="hover:underline text-sm">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-base font-semibold mb-3 underline">Contact Us</h3>
                        <p className="text-xs">Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
                        <p className="text-xs">Phone: +90 555 555 5555</p>
                        <p className="text-xs">Address: Istanbul, Turkey</p>

                        {/* Social Media */}
                        <div className="flex justify-center md:justify-start space-x-3 mt-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xl">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-xl">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xl">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 text-center text-gray-700 text-xs">
                    <p>© 2025 Your News Website. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
