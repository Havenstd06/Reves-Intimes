/*
 * Copyright (©) 2021-2021 Thomas Drumont
 */

import React from "react";
import {Fade} from "react-awesome-reveal";

// Produits de Dorcel store
const products = [
    {
        title: 'Vibromasseur Pulse Vibe Sundaze',
        price: '139,90 €',
        image: 'https://www.dorcelstore.com/media/catalog/product/cache/fe021cad3a3b85a5aaf753345c056c1f/s/u/sundaze_1.jpg',
        url: '#'
    },
    {
        title: 'Body Ouvert Dentelle Ajourée Avec Lanières',
        price: '104,95 €',
        image: 'https://www.dorcelstore.com/media/catalog/product/cache/fe021cad3a3b85a5aaf753345c056c1f/d/o/dorcesltore-13fichesproduit-lingeriepremium_879-blanc.jpg',
        url: '#'
    },
    {
        title: 'Nuisette Transparente Et String Noir',
        price: '39,99 €',
        image: 'https://www.dorcelstore.com/media/catalog/product/cache/fe021cad3a3b85a5aaf753345c056c1f/n/u/nuisette_transparente_et_string_noir_5a6f26a69546b.jpg',
        url: '#'
    },
    {
        title: 'Lubrifiant Ultime Consistance Fluide',
        price: '34,90 €',
        image: 'https://www.dorcelstore.com/media/catalog/product/cache/fe021cad3a3b85a5aaf753345c056c1f/9/8/98235_-_lubrifiant_ultime_-_consistance_fluide.yesforlov.fb_1.jpg',
        url: '#'
    },
    {
        title: 'Bougie De Massage Cœur Fraise',
        price: '19,95 €',
        image: 'https://www.dorcelstore.com/media/catalog/product/cache/fe021cad3a3b85a5aaf753345c056c1f/9/8/98286_-_bougie_fraise.jpg',
        url: '#'
    },
    {
        title: 'Kit De Peinture Corporel',
        price: '14,95 €',
        image: 'https://www.dorcelstore.com/media/catalog/product/cache/fe021cad3a3b85a5aaf753345c056c1f/s/p/spencer-fleetwood-lovers-body-paints.jpg',
        url: '#'
    },
    {
        title: 'Préservatif HEX Respect XL - Boite De 12',
        price: '19,90 €',
        image: 'https://www.dorcelstore.com/media/catalog/product/cache/fe021cad3a3b85a5aaf753345c056c1f/p/r/preservatif_hex_respect_xl_-_boite_de_12_5d43fb8466b53.jpg',
        url: '#'
    },
    {
        title: 'Stimulateur Clitoris Womanizer Premium Noir',
        price: '189,00 €',
        image: 'https://www.dorcelstore.com/media/catalog/product/cache/fe021cad3a3b85a5aaf753345c056c1f/s/t/stimulateur_clitoris_womanizer_premium_noir_5b18fdad0b88b.jpg',
        url: '#'
    },
]

const Products = (props) => {
    const { id } = props;

    return (
        <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-6 lg:py-8" id={id}>
            <Fade>
                <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <li key={product.image} className="relative">
                            <a href={product.url}>
                                <div className="relative flex items-center justify-center overflow-hidden rounded-sm h-64">
                                    <div className="absolute w-full h-full transition-all duration-1500 ease-in-out transform bg-center bg-cover hover:scale-110 hover:opacity-90"
                                         style={{
                                             backgroundImage: `url(${product.image})`
                                         }}>

                                    </div>
                                </div>

                                <div className="mt-2 text-center w-11/12 mx-auto">
                                    <h2 className="text-blueGray-600 text-lg font-light uppercase">
                                        {product.title}
                                    </h2>

                                    <h4 className="mt-1 text-blueGray-600 text-sm font-thin">
                                        {product.price}
                                    </h4>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </Fade>
        </section>
    )
}

export default Products
