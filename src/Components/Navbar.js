import { Fragment } from 'react'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import {ChevronDownIcon, LocationMarkerIcon, MenuIcon, ShoppingCartIcon, UserCircleIcon, XIcon} from '@heroicons/react/outline'
import Logo from "../Assets/Img/logo.png";

const navigation = [
    { name: 'Ventes Privées', href: '#', inRed: true },
    { name: 'Nouveautés', href: '#', inRed: false },
    { name: 'Sextoys', href: '#', inRed: false },
    { name: 'Cosmétiques', href: '#', inRed: false },
    { name: 'Maillots de bain', href: '#', inRed: false },
    { name: 'Homme', href: '#', inRed: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="header" className="bg-white shadow z-0">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-4 z-10">
                        <div className="relative flex justify-between">
                            <div className="relative z-10 flex items-center md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="z-0 flex-1 px-2 flex justify-center items-center">
                                <img src={Logo} className="w-12" alt="Rêves Intimes logo"/>
                                <h2 className="ml-3 text-2xl font-medium tracking-wider text-center md:text-left text-blueGray-800">
                                    Rêves Intimes
                                </h2>
                            </div>
                            <div className="relative z-10 ml-4 flex items-center">
                                <div className="flex justify-end space-x-4">
                                    <a href="">
                                        <SearchIcon className="w-5 text-gray-800 hover:text-gray-700 transition duration-200 ease-in-out" />
                                    </a>

                                    <a href="" className="hidden md:block ">
                                        <UserCircleIcon className="w-5 text-gray-800 hover:text-gray-700 transition duration-200 ease-in-out" />
                                    </a>

                                    <a href="">
                                        <ShoppingCartIcon className="w-5 text-gray-800 hover:text-gray-700 transition duration-200 ease-in-out" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <nav className="hidden md:block overflow-y-auto py-5 mt-3 whitespace-nowrap scroll-hidden" aria-label="Global">
                            <ul className="flex space-x-4 justify-center items-center list-none">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <a href="#"
                                           className={(item.inRed ? 'text-red-600' : 'text-blueGray-600') + " py-1 px-4 text-sm focus:outline-none transition duration-200 ease-in-out no-underline border-b border-white hover:border-blueGray-600 flex"}>
                                                {item.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <Popover className="relative">
                                        {({ open }) => (
                                            <>
                                                <Popover.Button
                                                    className={'text-blueGray-600 py-1 px-4 text-sm focus:outline-none transition duration-200 ease-in-out no-underline border-b border-white hover:border-blueGray-600 flex'}
                                                >
                                                    <span>Lingerie</span>
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open ? 'text-gray-600' : 'text-gray-400',
                                                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </Popover.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <Popover.Panel
                                                        static
                                                        className="fixed z-30 mt-3 transform w-screen max-w-2xl lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/4"
                                                    >
                                                        <div className='w-full py-4 px-3 bg-white shadow rounded-md'>
                                                            <div className="w-full flex justify-between space-x-4">
                                                                <div className="w-1/2 h-full">
                                                                    <h3 className="text-blueGray-700 font-semibold">
                                                                        Soutiens-gorge
                                                                    </h3>
                                                                    <ul className="mt-4 space-y-1">
                                                                        <li>
                                                                            <a href="" className="text-sm text-blueGray-600">
                                                                                Soutiens-gorge corbeille
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="" className="text-sm text-blueGray-600">
                                                                                Soutiens-gorge balconnet
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="" className="text-sm text-blueGray-600">
                                                                                Soutiens-gorge push-up
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="" className="text-sm text-blueGray-600">
                                                                                Soutiens-gorge bandeau
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="" className="text-sm text-blueGray-600">
                                                                                T-shirts bra
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="w-1/2 h-full pl-4 border-l border-black">
                                                                    <h3 className="text-blueGray-700 font-semibold">
                                                                        Culotes
                                                                    </h3>
                                                                    <ul className="mt-4 space-y-1">
                                                                        <li>
                                                                            <a href="" className="text-sm text-blueGray-600">
                                                                                Strings & tangas
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="" className="text-sm text-blueGray-600">
                                                                                Culottes Mini-coeur - Échancrées
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="" className="text-sm text-blueGray-600">
                                                                                Culottes Italienne - Dos dentelle/broderie
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="" className="text-sm text-blueGray-600">
                                                                                Culottes Brésilienne - Dos invisible
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="" className="text-sm text-blueGray-600">
                                                                                Shortys St-Tropez
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                        <div className="pt-2 pb-3 px-2 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="#"
                                className={'text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium'}
                            >
                                Lingerie
                            </a>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
