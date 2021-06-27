/*
 * Copyright (©) 2021-2021 Thomas Drumont
 */

import React from "react";

import Logo from '../Assets/Img/logo.png'
import {Fade} from "react-awesome-reveal";

const Newsletter = (props) => {
    const { id } = props;

    return (
        <div id={id} className="bg-white">
            <Fade>
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                    <div className="lg:w-3/5 lg:flex-1">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Inscrivez-vous à notre newsletter
                        </h2>
                        <p className="mt-3 max-w-3xl text-gray-500">
                            En vous inscrivant, vous acceptez que Rêves Intimes traite vos données personnelles, conformément à sa charte de confidentialité, aux fins de vous adresser des communications commerciales. Vous pouvez à tout moment vous désabonner, en cliquant sur le lien "se désinscrire" figurant en bas de chaque e-mail.
                        </p>
                    </div>
                    <div className="md:w-2/5 mt-8 lg:mt-0 lg:ml-8">
                        <form className="sm:flex">
                            <label htmlFor="emailAddress" className="sr-only">
                                Adresse mail
                            </label>
                            <input
                                id="emailAddress"
                                name="emailAddress"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full px-5 py-3 border border-blueGray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blueGray-500 focus:border-blueGray-500 sm:max-w-xs rounded-md"
                                placeholder="thomas@reves-intimes.fr"
                            />
                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="bg-white border border-blueGray-300 py-4 px-8 text-blueGray-600 font-bold uppercase text-xs rounded hover:bg-gray-100 transition duration-200 ease-in-out"
                                >
                                    Me notifier
                                </button>
                            </div>
                        </form>
                        <p className="mt-3 text-sm text-gray-500">
                            Nous nous soucions de la protection de vos données. Lisez notre{' '}
                            <a href="#" className="font-medium underline">
                                politique de confidentialité.
                            </a>
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Newsletter
