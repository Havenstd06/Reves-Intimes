import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import {Fade} from "react-awesome-reveal";

const Header = (props) => {
    const { id } = props;

    return (
        <div id={id}>
            <Fade>
                <Navbar />

                <Hero />
            </Fade>
        </div>
    )
}

export default Header
