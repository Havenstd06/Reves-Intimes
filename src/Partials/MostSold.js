import React from "react";

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
                            <li className="relative">
                                <div className="block overflow-hidden w-full group aspect-w-10 aspect-h-7 cursor-pointer">
                                    <img src="https://i.imgur.com/V9DrudM.png" width="300" height="300" className="object-cover pointer-events-none group-hover:opacity-75 cursor-pointer rounded-md" />
                                    <h4 className="mt-2 text-center text-blueGray-700">
                                        Stimulateur Prostate P-Swing
                                    </h4>
                                </div>
                            </li>
                            <li className="relative">
                                <div className="block overflow-hidden w-full group aspect-w-10 aspect-h-7 cursor-pointer">
                                    <img src="https://i.imgur.com/WSPSHV1.png" width="300" height="300" className="object-cover pointer-events-none group-hover:opacity-75 cursor-pointer rounded-md" />
                                    <h4 className="mt-2 text-center text-blueGray-700">
                                        Ensemble 3 Pièces Nuisette String Mitaines
                                    </h4>
                                </div>
                            </li>
                            <li className="relative">
                                <div className="block overflow-hidden w-full group aspect-w-10 aspect-h-7 cursor-pointer">
                                    <img src="https://i.imgur.com/UuzW6gU.png" width="300" height="300" className="object-cover pointer-events-none group-hover:opacity-75 cursor-pointer rounded-md" />
                                    <h4 className="mt-2 text-center text-blueGray-700">
                                        Boîte Oeufs Masturbateurs Tenga
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MostSold
