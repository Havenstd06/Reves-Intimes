import React from "react";
import MostSoldCard from "../Components/MostSoldCard";

const MostSold = (props) => {
    const { id } = props;

    return (
        <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12 lg:py-20" id={id}>
            <div className="md:flex mx-auto items-center justify-between">
                <div className="md:w-1/4 my-6 md:my-0">
                    <h1 className="text-3xl text-blueGray-600 tracking-widest font-semibold text-center">
                        Nos produits les plus vendus:
                    </h1>

                    <h4 className="mt-5 text-xl text-blueGray-700 text-center">
                        Sex-toys
                    </h4>

                    <h4 className="mt-1 text-xl text-blueGray-700 text-center">
                        Lingeries
                    </h4>

                    <h4 className="mt-1 text-xl text-blueGray-700 text-center">
                        Cosmétiques
                    </h4>
                </div>
                <div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <MostSoldCard
                            image="https://i.imgur.com/V9DrudM.png"
                            title="Stimulateur Prostate P-Swing"
                            url="#"
                            price="65,50€"
                        />

                        <MostSoldCard
                            image="https://i.imgur.com/WSPSHV1.png"
                            title="Ensemble 3 Pièces Nuisette String Mitaines"
                            url="#"
                            price="49,99€"
                        />

                        <MostSoldCard
                            image="https://i.imgur.com/UuzW6gU.png"
                            title="Boîte Oeufs Masturbateurs Tenga"
                            url="#"
                            price="20,99€"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MostSold
