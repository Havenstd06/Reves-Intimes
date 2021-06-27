import React from "react";
import Img1 from '../Assets/Img/Top2/1.png';
import Img2 from '../Assets/Img/Top2/2.png';

const Top2 = (props) => {
    const { id } = props;

    return (
        <section className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8 py-12 lg:py-20" id={id}>
            <div className="flex justify-between space-x-8 overflow-hidden"

            >
                <div className="w-1/2">
                    <img src={Img1}
                         className="rounded-sm shadow-lg"
                         style={{height: '35rem'}}
                         alt=""
                    />
                </div>
                <div className="w-1/2">
                    <img src={Img2}
                         className="rounded-sm shadow-lg"
                         style={{height: '35rem'}}
                         alt=""
                    />
                </div>
            </div>
        </section>
    )
}

export default Top2
