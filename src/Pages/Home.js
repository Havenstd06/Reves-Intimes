import React, {useEffect} from "react";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import MostSold from "../Partials/MostSold";

const Home = () => {
    return (
        <div className="application">
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/*  Site header */}
                <Header id="home" />

                {/*  Page content */}
                <main className="flex-grow z-40 space-y-16">

                    {/*  Page sections */}
                    <MostSold id="mostSold" />

                </main>

                {/*  Site footer */}
                <Footer id="footer" />

            </div>
        </div>
    )
}

export default Home;
