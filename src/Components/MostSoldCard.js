/*
 * Copyright (©) 2021-2021 Thomas Drumont
 */

import React from "react";

const MostSoldCard = ({ image, title, url, price}) => {
    return (
        <div className="flip mx-auto">
            <div className="flip-content">
                <div className="flip-front rounded">
                    <img src={image} className="rounded" alt={title + ' logo'}/>
                </div>
                <a href={url} className="flip-back bg-white flex flex-col justify-center border px-4">
                    <div className="text-blueGray-600 text-md font-light">
                        {title}
                    </div>
                    <div className="mt-5 text-blueGray-600 text-lg font-thin">
                        {price}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default MostSoldCard;
