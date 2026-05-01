import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 mt-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                
                {/* Brand Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Tiles<span className="text-[#f17c13]">Nexus</span></h2>
                    <p className="text-sm leading-relaxed">
                        Bringing elegance and durability to your spaces with our premium collection of stones and tiles.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="hover:text-[#f17c13] transition-colors text-xl"><FaFacebook /></a>
                        <a href="#" className="hover:text-[#f17c13] transition-colors text-xl"><FaTwitter /></a>
                        <a href="#" className="hover:text-[#f17c13] transition-colors text-xl"><FaInstagram /></a>
                        <a href="#" className="hover:text-[#f17c13] transition-colors text-xl"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-[#f17c13] transition-colors">Home</Link></li>
                        <li><Link href="/AllTiles/id" className="hover:text-[#f17c13] transition-colors">All Tiles</Link></li>
                        <li><Link href="/MyProfile" className="hover:text-[#f17c13] transition-colors">My Profile</Link></li>
                        <li><Link href="/login" className="hover:text-[#f17c13] transition-colors">Login</Link></li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-[#f17c13] mt-1" />
                            <span>Plot 1, Block B, Bashundhara R/A, Dhaka</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-[#f17c13]" />
                            <span>+880 1234 567890</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[#f17c13]" />
                            <span>info@tilesnexus.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter/Action */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
                    <p className="text-sm mb-4">Subscribe to get the latest updates on new collections.</p>
                    <div className="flex flex-col gap-2">
                        <input 
                            type="email" 
                            placeholder="Your email" 
                            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#f17c13]"
                        />
                        <button className="bg-[#f17c13] hover:bg-[#d66b0e] text-white py-2 rounded-lg font-semibold transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} TilesNexus. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;