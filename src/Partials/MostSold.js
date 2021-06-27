import React from "react";
import MostSoldCard from "../Components/MostSoldCard";

const MostSold = (props) => {
    const { id } = props;

    return (
        <div id={id}>
            <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
                <div className="flex items-center justify-between space-x-12">
                    <div className="w-1/4">
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
                        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MostSold
