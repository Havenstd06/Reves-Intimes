/*
 * Copyright (©) 2021-2021 Thomas Drumont
 */

import React from "react";

import Logo from '../Assets/Img/logo.png'
import {Fade} from "react-awesome-reveal";

const Footer = (props) => {
    const { id } = props;

    return (
        <div id={id} className="border-t mt-12">
            <Fade>
                <div className="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <a
                                href="#"
                                className="inline-flex items-center"
                            >
                                <img src={Logo} className="w-8" alt="Logo"/>

                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                              Rêves Intimes
                            </span>
                            </a>
                            <div className="mt-6 lg:max-w-sm">
                                <p className="text-sm text-gray-800">
                                    Rêves Intimes est une boutique dédiée à la lingerie fine et coquine, aux accessoires luxueux et aux sex-toys ludiques.
                                </p>
                                <p className="mt-4 text-sm text-gray-800">
                                    Envie de pimenter votre quotidien ou envie de faire plaisir, ce nouvel espace est fait pour vous. Un large choix de bougies parfumées, d’huiles de massages, de gels stimulants et d’accessoires érotiques…
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <p className="text-base font-bold tracking-wide text-gray-900">
                                Contact
                            </p>
                            <div className="flex">
                                <p className="mr-1 text-gray-800">Téléphone:</p>
                                <a
                                    href="tel:0491448846"
                                    className="transition-colors duration-300 text-blueGray-600 hover:text-deep-purple-800"
                                >
                                    04 91 44 88 46
                                </a>
                            </div>
                            <div className="flex">
                                <p className="mr-1 text-gray-800">Email:</p>
                                <a
                                    href="mailto:contact@reves-intimes.fr"
                                    className="transition-colors duration-300 text-blueGray-600 hover:text-deep-purple-800"
                                >
                                    contact@reves-intimes.fr
                                </a>
                            </div>
                            <div className="flex">
                                <p className="mr-1 text-gray-800">Addresse:</p>
                                <a
                                    href="https://www.google.fr/maps?hl=en&q=155+Route+des+Trois+Lucs+%C3%A0+la+Valentine,+13011+Marseille"
                                    target="_blank"
                                    className="transition-colors duration-300 text-blueGray-600 hover:text-deep-purple-800"
                                >
                                    155 Route des Trois Lucs à la Valentine, 13011 Marseille
                                </a>
                            </div>
                        </div>
                        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
                            <div className="flex items-center mt-1 space-x-3">
                                <a
                                    href="https://www.instagram.com/revesintimes/"
                                    target="_blank"
                                    className="text-gray-500 transition-colors duration-300 hover:text-blueGray-600"
                                >
                                    <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                        <circle cx="15" cy="15" r="4" />
                                        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.facebook.com/reves.intimes"
                                    target="_blank"
                                    className="text-gray-500 transition-colors duration-300 hover:text-blueGray-600"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                    </svg>
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                Nous sommes ouverts à toute demande de partenariat, merci de passer par nos réseaux sociaux pour nous contacter.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                        <p className="text-sm text-gray-600">
                            © 2021 Rêves Intimes. Tous droits réservés.
                        </p>
                        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                            <li>
                                <a
                                    href="/"
                                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-blueGray-600"
                                >
                                    Politique de confidentialité
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-blueGray-600"
                                >
                                    Termes &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Footer
