import React, {useEffect} from "react";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import MostSold from "../Partials/MostSold";
import DiscoverCollection from "../Partials/DiscoverCollection";
import TopCliche from "../Partials/TopCliche";

const Home = () => {
    return (
        <div className="application">
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/*  Site header */}
                <Header id="home" />

                {/*  Page content */}
                <main className="flex-grow z-40">

                    {/*  Page sections */}
                    <MostSold id="mostSold" />

                    <DiscoverCollection id="DiscoverCollection" />

                    <TopCliche id="TopGallery" />

                </main>

                {/*  Site footer */}
                <Footer id="footer" />

            </div>
        </div>
    )
}

export default Home;
