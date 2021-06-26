import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    LocationMarkerIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Logo from '../Assets/Img/logo.png'

export default function Navbar() {
    return (
        <div className="text-gray-800 bg-white transition duration-500 ease-in-out">
            <div className="flex justify-between p-5 mx-auto space-x-6 max-w-7xl">
                <div className="w-1/3">
                    <div className="flex items-center">
                        <LocationMarkerIcon className="w-6" />
                        <h3 className="ml-3 text-sm text-gray-700">Localisation</h3>
                    </div>
                </div>

                <div className="w-1/3">
                    <div className="flex justify-center items-center focus:outline-none">
                        <img src={Logo} className="w-12" alt="Rêves Intimes logo"/>
                        <h2 className="ml-3 text-2xl font-medium tracking-wider text-center md:text-left text-blueGray-800">
                            Rêves Intimes
                        </h2>
                    </div>
                </div>

                <div className="w-1/3">

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
)
}
