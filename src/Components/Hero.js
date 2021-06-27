import React from "react";
import Carousel from 'nuka-carousel';

import HeroCarouselCard from "./HeroCarouselCard";

import Img1 from '../Assets/Img/Hero/1.jpeg'
import Img2 from '../Assets/Img/Hero/2.jpeg'
import Img3 from '../Assets/Img/Hero/3.jpeg'

import {
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/outline";

const Hero = () => {
    return (
        <Carousel
            autoplay={true}
            wrapAround={true}
            renderCenterLeftControls={({ previousSlide }) => (
                <div className='hidden md:block absolute inset-y-0 left-0 -translate-y-1/2'>
                    <button
                        onClick={previousSlide}
                        className="ml-2 bg-gray-600 rounded-md bg-black bg-opacity-20 text-white p-2 cursor-pointer"
                    >
                        <ChevronLeftIcon className="w-6" />
                    </button>
                </div>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <div className='hidden md:block absolute inset-y-0 right-0 -translate-y-1/2'>
                    <button
                        onClick={nextSlide}
                        className="mr-2 bg-gray-600 rounded-md bg-black bg-opacity-20 text-white p-2 cursor-pointer"
                    >
                        <ChevronRightIcon className="w-6" />
                    </button>
                </div>
            )}

            defaultControlsConfig={{
                pagingDotsStyle: {
                    fill: '#fff',
                    marginLeft: '20px',
                }
            }}
        >
            <HeroCarouselCard
                image={Img1}
                title="Lingerie"
                description="Découvrer la nouvelle collection de lingerie haut de gamme."
                url="#"
            />

            <HeroCarouselCard
                image={Img2}
                title="Sex-toys"
                description="Découvrer la nouvelle gamme de sex-toys masculin et féminin."
                url="#"
            />

            <HeroCarouselCard
                image={Img3}
                title="Cosmétique"
                description="Découvrer tous les accessoires cosmétiques pour homme & femme."
                url="#"
            />
        </Carousel>
    )
}

export default Hero;
