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
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {infos.map((info) => (
                            <div className="relative rounded-lg border border-blueGray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-blueGray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blueGray-500">
                                <div className="flex flex-col items-center justify-center space-y-4 w-full">
                                    <div className="w-10 text-blueGray-600 opacity-90">
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
