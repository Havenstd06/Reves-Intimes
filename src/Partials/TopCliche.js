import React from "react";

import {Fade} from "react-awesome-reveal";
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import TopClicheCard from "../Components/TopClicheCard";

import Img1 from '../Assets/Img/TopCliche/1.jpg'
import Img2 from '../Assets/Img/TopCliche/2.jpg'
import Img3 from '../Assets/Img/TopCliche/3.jpg'
import Img4 from '../Assets/Img/TopCliche/4.jpg'
import Img5 from '../Assets/Img/TopCliche/5.jpg'
import Img6 from '../Assets/Img/TopCliche/6.jpg'
import Img7 from '../Assets/Img/TopCliche/7.jpg'
import Img8 from '../Assets/Img/TopCliche/8.jpg'
import Img9 from '../Assets/Img/TopCliche/9.jpg'

const TopCliche = (props) => {
    const { id } = props;

    return (
        <section className="px-4 pt-6 pb-12 mx-auto max-w-6xl sm:px-6 lg:px-8 lg:pb-16" id={id}>
            <Fade>
                <h1 className="mb-6 text-2xl font-semibold tracking-widest text-center text-blueGray-600">
                    Nos meilleurs clichés
                </h1>
            </Fade>

            <Fade>
                <div className="flex items-center space-y-3 space-x-4">
                    <div className="w-1/3">
                        <LightGallery
                            mode="lg-fade"
                            speed={500}
                            plugins={[ lgZoom]}
                        >
                            <TopClicheCard
                                size="699-999"
                                image={Img1}
                            />

                            <TopClicheCard
                                size="1080-1080"
                                image={Img2}
                            />

                            <TopClicheCard
                                size="1080-1080"
                                image={Img3}
                            />
                        </LightGallery>

                    </div>

                    <div className="w-1/3">
                        <LightGallery
                            mode="lg-fade"
                            speed={500}
                            plugins={[ lgZoom]}
                        >
                            <TopClicheCard
                                    size="1000-1000"
                                    image={Img4}
                                />

                            <TopClicheCard
                                size="500-625"
                                image={Img5}
                            />

                            <TopClicheCard
                                size="479-599"
                                image={Img6}
                            />
                        </LightGallery>
                    </div>

                    <div className="w-1/3">
                        <LightGallery
                            mode="lg-fade"
                            speed={500}
                            plugins={[ lgZoom]}
                        >
                            <TopClicheCard
                                size="999-667"
                                image={Img7}
                            />

                            <TopClicheCard
                                size="1080-1333"
                                image={Img8}
                            />

                            <TopClicheCard
                                size="936-707"
                                image={Img9}
                            />
                        </LightGallery>
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default TopCliche
