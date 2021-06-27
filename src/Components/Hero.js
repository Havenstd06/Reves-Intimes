import React from "react";
import Slider from "react-slick";
import Carousel from 'nuka-carousel';
import HeroCarouselCard from "./HeroCarouselCard";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
    };

    return (
        <>
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
                image="https://images.unsplash.com/flagged/photo-1579854532496-83053ed63bd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
                title="Lingerie"
                description="Découvrer la nouvelle collection de lingerie haut de gamme."
                url="#"
            />

            <HeroCarouselCard
                image="https://images.unsplash.com/photo-1593527538338-86235520a070?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                title="Sex-toys"
                description="Découvrer la nouvelle gamme de sex-toys masculin et féminin."
                url="#"
            />

            <HeroCarouselCard
                image="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                title="Cosmétique"
                description="Découvrer tous les accessoires cosmétiques de Rêves Intimes."
                url="#"
            />
        </Carousel>
            {/*<Slider*/}
            {/*    {...settings}*/}
            {/*>*/}

                {/*<HeroCarouselCard*/}
                {/*    image="https://images.unsplash.com/flagged/photo-1579854532496-83053ed63bd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"*/}
                {/*    title="Lingerie"*/}
                {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere non leo eget tempor."*/}
                {/*    url="#"*/}
                {/*/>*/}

                {/*<HeroCarouselCard*/}
                {/*    image="https://images.unsplash.com/photo-1561382706-ed59303dceda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"*/}
                {/*    title="Lingerie"*/}
                {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere non leo eget tempor."*/}
                {/*    url="#"*/}
                {/*/>*/}
            {/*</Slider>*/}
        </>
    )
}

export default Hero;
