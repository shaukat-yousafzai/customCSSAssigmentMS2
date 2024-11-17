"use client";
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

type ImageType = {
    src: string; // Corrected type
    alt: string;
    title: string;
    rating: number;
    price: number;
    discount?: number;
    width: number; // Add width
    height: number; // Add height
};

type ThreeBoxLayoutProps = {
    heading: string;
    images: ImageType[];
    buttonText: string;
};

const ThreeBoxLayout: React.FC<ThreeBoxLayoutProps> = ({ heading, images, buttonText }) => {
    return (
        <div className="container mx-auto flex items-center px-4">
            <div>
                {/* Heading */}
                <div className="flex justify-center pt-8 my-10">
                    <h1 className="text-4xl font-bold">{heading}</h1>
                </div>
                {/* Image Grid */}
                <div className="grid grid-cols-12 gap-4 mb-8">
                    {images.map((image, index) => (
                        <div key={index} className="col-span-12 md:col-span-3 p-4">
                            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="w-full h-auto" />
                            <div className="mt-4">
                                <h2 className="font-bold text-xl">{image.title}</h2>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={i < image.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">({image.rating}/5)</span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    {image.discount ? (
                                        <>
                                            <p className="text-lg line-through">${image.price.toFixed(2)}</p>
                                            <p className="text-lg">${(image.price * (1 - image.discount / 100)).toFixed(2)}</p>
                                            <p className="text-red-500 bg-red-200 text-sm h-5 flex items-center px-3 rounded-2xl">{image.discount}%</p>
                                        </>
                                    ) : (
                                        <p className="text-lg">${image.price.toFixed(2)}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Button */}
                <div className="flex justify-center">
                    <Button className="bg-white bg-opacity-10 text-black border border-black hover:bg-white hover:bg-opacity-30 w-40 md:w-52 mb-16 h-12 rounded-3xl">
                        {buttonText}
                    </Button>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default ThreeBoxLayout;
