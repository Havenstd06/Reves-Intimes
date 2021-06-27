import React, {useEffect} from "react";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import MostSold from "../Partials/MostSold";
import DiscoverCollection from "../Partials/DiscoverCollection";
import TopCliche from "../Partials/TopCliche";
import Newsletter from "../Partials/Newsletter";
import Infos from "../Partials/Infos";

const Home = () => {
    return (
        <div className="application">
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/*  Site header */}
                <Header id="Header" />

                {/*  Page content */}
                <main className="flex-grow z-40">

                    {/*  Page sections */}
                    <MostSold id="MostSold" />

                    <DiscoverCollection id="DiscoverCollection" />

                    <TopCliche id="TopGallery" />

                    <Infos id="Infos" />

                    <Newsletter id="Newsletter" />

                </main>

                {/*  Site footer */}
                <Footer id="footer" />

            </div>
        </div>
    )
}

export default Home;
