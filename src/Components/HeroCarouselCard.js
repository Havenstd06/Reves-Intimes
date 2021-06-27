import React from "react";

const HeroCarouselCard = ({ image, title, description, url }) => {
    return (
        <div className="bg-cover bg-center h-auto text-white py-40 px-10 object-fill focus:outline-none"
             style={{
                 backgroundImage: `url(${image})`
             }}>
            <div className="md:max-w-4xl md:mx-auto">
                <div className="md:max-w-xl">
                    <h3 className="text-4xl font-semibold uppercase tracker-widest">
                        {title}
                    </h3>
                    <h4 className="text-2xl mt-4 mb-10 leading-none">
                        {description}
                    </h4>
                    <a href={url}
                       className="bg-transparent border border-white py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-white hover:bg-opacity-20 transition duration-200 ease-in-out">
                        Découvrir Maintenant
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroCarouselCard;
