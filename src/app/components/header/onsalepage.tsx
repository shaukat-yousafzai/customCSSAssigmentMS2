"use client";
import React from 'react';
import Image from 'next/image';

type ImageType = {
    src: string;
    alt: string;
    title: string;
    rating: number;
    price: number;
    discount?: number;
    width: number;
    height: number;
};

type ImageArrType = {
    images: ImageType[];
};

const Onsalepage: React.FC<ImageArrType> = ({ images }) => {
    return (
        <div className="container mx-auto flex items-center justify-center px-4 mt-36">
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
        </div>
    );
};

export default Onsalepage;
