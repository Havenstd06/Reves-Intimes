import React from "react";

const Top2Card = ({ image, title, description, url}) => {
    return (
        <a href={url} className="w-1/2">

            <div className="relative flex items-center justify-center m-3 overflow-hidden rounded-sm"
                 style={{height: '35rem'}}
            >
                <div className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover hover:scale-103 hover:opacity-90"
                    style={{
                        backgroundImage: `url(${image})`
                    }}>
                </div>
            </div>

            <div className="mt-4 text-center w-11/12 mx-auto">
                <h2 className="text-blueGray-600 text-lg font-light uppercase">
                    {title}
                </h2>

                <h4 className="mt-1 text-blueGray-600 text-sm font-thin line-clamp-3" title={description}>
                    {description}
                </h4>
            </div>
        </a>
    )
}

export default Top2Card;
