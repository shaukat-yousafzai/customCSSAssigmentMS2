"use client";

import Onsalepage from "@/app/components/header/onsalepage";
import React from "react";

type ImageType = {
    src: string;
    alt: string;
    title: string;
    rating: number;
    price: number;
    discount?: number;
    width: number;  // Add width
    height: number; // Add height
};

type ImageArrType = {
    images: ImageType[];
};

export default function Salepage() {
    const firstRow: ImageArrType = {
        images: [
            { src: "/images/T-shirt.png", alt: 'T-shirt', title: 'T-shirt with Tape Detail', rating: 4, price: 29.99, discount: 10, width: 500, height: 500 },
            { src:"/images/skinnyfitjeams.png", alt: 'Jeans', title: 'Skinny Fit Jeans', rating: 5, price: 49.99, width: 500, height: 500 },
            { src: "/images/checkeredshit.png", alt: 'Shirt', title: 'Checkered Shirt', rating: 3, price: 25.99, discount: 5, width: 500, height: 500 },
            { src: "/images/selve.png", alt: 'Selve', title: 'Selve Shirt', rating: 4, price: 35.99, width: 500, height: 500 }
        ]
    };

    return (
        <div className="w-screen">
            {Array(7).fill(0).map((_, index) => (
                <Onsalepage key={index} {...firstRow} />
            ))}
        </div>
    );
}
