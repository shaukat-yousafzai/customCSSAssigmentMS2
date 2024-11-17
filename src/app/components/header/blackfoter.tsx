"use client";
import { FaEnvelope } from 'react-icons/fa';
import React from 'react';

const InputButtonComponent: React.FC = () => {
    return (
        <div className="container mx-auto rounded-3xl bg-black flex items-center px-4 h-44 w-screen relative">
            {/* First Div with Text */}
            <div className="w-1/2 flex items-center justify-center">
                <p className="text-5xl px-20 font-semibold text-white">STAY UP TO DATE WITH OUR LATEST OFFERS</p>
            </div>
            {/* Second Div with Input and Button */}
            <div className="w-1/2 flex flex-col items-center">
                <div className="w-[350px]">
                    <div className="flex items-center mb-4 w-full relative">
                        <span className="absolute pl-3">
                            <FaEnvelope className="text-gray-500" />
                        </span>
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="pl-10 py-2 w-full border border-gray-300 rounded-full focus:outline-none"
                        />
                    </div>
                    <button className="bg-white text-black py-2 w-full rounded-full">Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
    );
};

export default InputButtonComponent;
