
import React, { useState } from "react"

import image1 from "../assets/carousel/ecommerce_1.webp"
import image2 from "../assets/carousel/ecommerce_2.jpg"
import image3 from "../assets/carousel/ecommerce_3.webp"
import image4 from "../assets/carousel/ecommerce_4.jpg"

export default function Home() {
    const slides = [
        {
            path: image1
        },
        {
            path: image2
        },
        {
            path: image3
        },
        {
            path: image4
        }
    ];

    const slides1 = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];


    try {
        return (
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                <div
                    style={{ backgroundImage: `url(${slides1[1].url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
            </div>
        );
    } catch (error) {
        console.error("Error loading image:", error);
        // Optionally, display a fallback or placeholder image
        return <div>No image available</div>;
    }

}