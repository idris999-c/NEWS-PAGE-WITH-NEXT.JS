import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <hr />
            <footer className=" text-black bg-gray-50 py-3">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/*about */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 underline">Hakkında</h3>
                        <p>
                            Bu site, en güncel haberleri tarafsız bir şekilde sunmayı amaçlar.
                            Misyonumuz, bilgiye hızlı ve doğru bir şekilde erişmenizi sağlamaktır.
                        </p>
                    </div>

                    {/* navbar */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 underline">Hızlı Bağlantılar</h3>
                        <ul>
                            <li><Link href="/" className="hover:underline">Anasayfa</Link></li>
                            <li><Link href="/Navbar/about" className="hover:underline">Hakkında</Link></li>
                            <li><Link href="/Navbar/contact" className="hover:underline">İletişim</Link></li>
                            <li><Link href="/Navbar/services" className="hover:underline">Hizmetler</Link></li>
                            <li><Link href="/Navbar/privacy-policy" className="hover:underline">Gizlilik Politikası</Link></li>
                        </ul>
                    </div>

                    {/* contact us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 underline">İletişim</h3>
                        <p>E-posta: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
                        <p>Telefon: +90 555 555 5555</p>
                        <p>Adres: İstanbul, Türkiye</p>

                        {/* sosyal media icons */}
                        <div className="flex space-x-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center text-gray-700">
                    <p>© 2025 Your News Website. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer