/*
 * Copyright (©) 2021-2021 Thomas Drumont
 */

import React from "react";

import Logo from '../Assets/Img/logo.png'
import {Fade} from "react-awesome-reveal";
import {ClockIcon, OfficeBuildingIcon, PhoneIcon, TruckIcon} from "@heroicons/react/outline";

const infos = [
    {
        logo: <OfficeBuildingIcon />,
        title: 'Retours en magasin totalement gratuit!',
    },
    {
        logo: <ClockIcon />,
        title: 'Vous avez 30 jours pour renvoyer votre article.',
    },
    {
        logo: <TruckIcon />,
        title: 'Livraisons gratuites à partir de 50€ d\'achats.',
    },
    {
        logo: <PhoneIcon />,
        title: 'Paiement sécurisé via Paypal, Visa ou Mastercard.',
    },
]

const Infos = (props) => {
    const { id } = props;

    return (
        <div id={id} className="bg-white">
            <Fade>
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y divide-x-0 md:divide-y-0 md:divide-x divide-blueGray-400 divide-dashed">
                        {infos.map((info) => (
                            <div className="relative bg-white px-6 py-5 flex items-center space-x-3 focus:outline-none">
                                <div className="flex flex-col items-center justify-center space-y-4 w-full">
                                    <div className="w-9 text-blueGray-600 opacity-90">
                                        {info.logo}
                                    </div>
                                    <div className="text-center tracking-wide text-blueGray-800">
                                        {info.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Infos
