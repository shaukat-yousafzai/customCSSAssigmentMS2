"use client";
import React, { useState, useEffect } from 'react';

type ReviewType = {
    name: string;
    comment: string;
    rating: number;
};

type ReviewComponentProps = {
    reviews: ReviewType[];
};

const ReviewComponent: React.FC<ReviewComponentProps> = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
            } else if (window.innerWidth >= 768) {
                setItemsToShow(2);
            } else {
                setItemsToShow(1);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex + itemsToShow < reviews.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="container w-screen mx-auto px-4 my-14">
            {/* Heading */}
            <div className="flex justify-between mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">Happy Customer Reviews</h1>
                <div className="flex space-x-4">
                    <button onClick={handlePrevClick} className={`font-black p-2 rounded-full ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`} disabled={currentIndex === 0}>←</button>
                    <button onClick={handleNextClick} className={`font-black p-2 rounded-full ${currentIndex + itemsToShow >= reviews.length ? "opacity-50 cursor-not-allowed" : ""}`} disabled={currentIndex + itemsToShow >= reviews.length}>→</button>
                </div>
            </div>

            {/* Reviews */}
            <div className="flex overflow-hidden space-x-4">
                {reviews.slice(currentIndex, currentIndex + itemsToShow).map((review, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-10 border border-gray-200 bg-white rounded-3xl shadow-md flex-shrink-0">
                        <div className="mb-2">
                            <div className="flex text-3xl mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                                ))}
                            </div>
                            <span className="text-xl font-bold mb-3 text-green-500">{review.name}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewComponent;
