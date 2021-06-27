import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Header = (props) => {
    const { id } = props;

    return (
        <div id={id}>
            <Navbar />

            <Hero />
        </div>
    )
}

export default Header
