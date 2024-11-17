"use client";
import Image from 'next/image';
import React from 'react';



const LayoutComponent: React.FC = () => {
    return (
        <>
        <div className='container mx-auto flex items-center ' >
            <div className='w-screen p-[70px_64px] rounded-3xl bg-[#F2F0F1]'>
                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-5xl font-black text-black">BROWSE BY DRESS STYLE</h1>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-12 gap-5">
                    {/* First Row */}
                    <div className="col-span-4 bg-gray-200 relative w-full h-72">
                        <Image src="/images/casual.png" alt="Casual" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-white">Casual</h2>
                        </div>
                    </div>
                    <div className="col-span-8 bg-gray-200 relative w-full h-72">
                        <Image src="/images/formal.png" alt="Formal" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-white">Formal</h2>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="col-span-8 bg-gray-200 relative w-full h-72">
                        <Image src="/images/party.png" alt="Party" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-white">Party</h2>
                        </div>
                    </div>
                    <div className="col-span-4 bg-gray-200 relative w-full h-72">
                        <Image src="/images/gym.png" alt="Gym" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-white">Gym</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default LayoutComponent;
