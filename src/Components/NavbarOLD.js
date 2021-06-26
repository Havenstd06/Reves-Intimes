import React from "react";

import {
    LocationMarkerIcon, SearchIcon, ShoppingCartIcon, UserCircleIcon,
} from '@heroicons/react/outline'

import Logo from '../Assets/Img/logo.png'

export default function Navbar() {
    return (
        <div className="text-gray-800 bg-white transition duration-500 ease-in-out">
            <div className="block md:hidden">

            </div>
            <div className="hidden md:block sm:flex justify-between p-5 mx-auto space-x-6 max-w-7xl">
                <div className="md:w-1/3">
                    <div className="flex items-center">
                        <LocationMarkerIcon className="w-5 font-light" />
                        <a href="https://www.google.fr/maps?hl=en&q=155+Route+des+Trois+Lucs+%C3%A0+la+Valentine,+13011+Marseille"
                           target="_blank"
                           className="ml-2 text-sm text-gray-700 font-light">
                            Localisation
                        </a>
                    </div>
                </div>

                <div className="md:w-1/3">
                    <div className="flex justify-center items-center focus:outline-none">
                        <img src={Logo} className="w-12" alt="Rêves Intimes logo"/>
                        <h2 className="ml-3 text-2xl font-medium tracking-wider text-center md:text-left text-blueGray-800">
                            Rêves Intimes
                        </h2>
                    </div>
                </div>

                <div className="md:w-1/3">
                    <div className="flex justify-end space-x-4">
                        <SearchIcon className="w-5 font-light" />

                        <UserCircleIcon className="w-5 font-light" />

                        <ShoppingCartIcon className="w-5 font-light" />
                    </div>
                </div>
            </div>
            <div className="overflow-y-auto p-5 mt-3 whitespace-nowrap border-t scroll-hidden">
                <ul className="inline-flex items-center list-none">
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Pricing</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Contact</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Services</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Now</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Pricing</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Contact</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Services</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Now</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Pricing</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Contact</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Services</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Now</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Pricing</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Contact</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Services</a>
                    </li>
                    <li>
                        <a href="#"
                           className="py-1 px-4 mr-1 text-base rounded-md ring-offset-2 ring-offset-current transition duration-500 ease-in-out transform text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 hover:text-black">Now</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
