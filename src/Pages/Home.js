import React, {useEffect} from "react";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";

const Home = () => {
    return (
        <div className="application">
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/*  Site header */}
                <Header id="home" />

                {/*  Page content */}
                <main className="flex-grow bg-bluebell z-40">

                    {/*  Page sections */}

                </main>

                {/*  Site footer */}
                <Footer id="footer" />

            </div>
        </div>
    )
}

export default Home;
