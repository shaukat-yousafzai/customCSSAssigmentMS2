"use client";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white pt-16 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                <div>
                    <h2 className="text-4xl font-bold mb-4">SHOP.CO</h2>
                    <p className="mb-5">
                        We have clothes that suit your style and which you are proud to wear—from women to men.
                    </p>
                    <div className="flex space-x-4">
                        <FaFacebook className="hover:text-gray-400 cursor-pointer" />
                        <FaTwitter className="hover:text-gray-400 cursor-pointer" />
                        <FaInstagram className="hover:text-gray-400 cursor-pointer" />
                        <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Company</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Features</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Works</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Help</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Customer Support</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Delivery Details</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Orders</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">FAQ</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Account</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Manage Deliveries</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Payments</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Resources</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Free eBooks</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Development Tutorials</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">How-to Blog</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">YouTube Playlist</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 text-center">
                <p className="mt-4">&copy; 2024 SHOP.CO. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
