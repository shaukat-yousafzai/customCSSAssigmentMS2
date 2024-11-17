"use client";
import React from 'react';
import Headline from "@/app/components/header/headline";
import Hero from "@/app/components/header/heroSection";
import ThreeBoxLayout from "@/app/components/header/onsale";
import LayoutComponent from "@/app/components/header/drssing";
import ReviewComponent from "@/app/components/header/comment";

const reviews = [
    { name: "John Doe", comment: "Your website is good.", rating: 4 },
    { name: "Jane Smith", comment: "Great service and products!", rating: 5 },
    { name: "Alice Johnson", comment: "I love shopping here.", rating: 3 },
    { name: "Linda White", comment: "Nice user interface.", rating: 4 },
    { name: "Robert Green", comment: "The product quality could be better.", rating: 2 },
    { name: "Emily Davis", comment: "Exceptional customer support!", rating: 5 },
    { name: "Paul Martinez", comment: "Product matches the description.", rating: 4 },
    { name: "Karen Taylor", comment: "Would recommend to friends.", rating: 5 },
    { name: "James Anderson", comment: "Not satisfied with the return policy.", rating: 3 },
    { name: "Jessica Wilson", comment: "Excellent shopping experience.", rating: 5 }
];


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

type LayoutType = {
    heading: string;
    images: ImageType[];
    buttonText: string;
};

const firstLayout: LayoutType = {
    heading: 'NEW ARRIVALS',
    images: [
        { src: "/images/T-shirt.png", alt: 'T-shirt', title: 'T-shirt with Tape Detail', rating: 4, price: 29.99, discount: 10, width: 500, height: 500 },
        { src:"/images/skinnyfitjeams.png", alt: 'Jeans', title: 'Skinny Fit Jeans', rating: 5, price: 49.99, width: 500, height: 500 },
        { src: "/images/checkeredshit.png", alt: 'Shirt', title: 'Checkered Shirt', rating: 3, price: 25.99, discount: 5, width: 500, height: 500 },
        { src: "/images/selve.png", alt: 'Selve', title: 'Selve Shirt', rating: 4, price: 35.99, width: 500, height: 500 }
    ],
    buttonText: 'VIEW'
};

const firstLayout1: LayoutType = {
    heading: 'TOP SELLING',
    images: [
        { src: "/images/T-shirt.png", alt: 'T-shirt', title: 'T-shirt with Tape Detail', rating: 4, price: 29.99, discount: 10, width: 500, height: 500 },
        { src: "/images/skinnyfitjeams.png", alt: 'Jeans', title: 'Skinny Fit Jeans', rating: 5, price: 49.99, width: 500, height: 500 },
        { src: "/images/checkeredshit.png", alt: 'Shirt', title: 'Checkered Shirt', rating: 3, price: 25.99, discount: 5, width: 500, height: 500 },
        { src: "/images/selve.png", alt: 'Selve', title: 'Selve Shirt', rating: 4, price: 35.99, width: 500, height: 500 }
    ],
    buttonText: 'VIEW'
};

export default function Home() {
    return (
        <div className="w-screen">
          
            <Hero />
            <Headline />
            <ThreeBoxLayout {...firstLayout} />
            <ThreeBoxLayout {...firstLayout1} />
            <LayoutComponent />
            <ReviewComponent reviews={reviews} />
        </div>
    );
}
