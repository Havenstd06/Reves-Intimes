import React from "react";
import Img1 from '../Assets/Img/Top2/1.png';
import Img2 from '../Assets/Img/Top2/2.png';
import Top2Card from "../Components/Top2Card";

const Top2 = (props) => {
    const { id } = props;

    return (
        <section className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8 pb-12 lg:pb-16 pt-6" id={id}>
            <h1 className="text-blueGray-600 text-2xl tracking-widest font-semibold text-center mb-6">
                Découvrez la dernière collection
            </h1>
            <div className="flex justify-between md:space-x-8 overflow-hidden">
                <Top2Card image={Img1}
                          title="Ensemble Sexy 4 Pièces Lingerie Noire"
                          description="Magnifique et sensuel, cet ensemble de dentelle quatre pièces avec un haut triangle échancré avec bande de base élastique, ceinture avec jarretelles, accessoire de harnais séparé et string assorti. Dominez votre soumis du moment avec ce fabuleux ensemble 4 pièces ! Vous êtes la maîtresse dominatrice de la soirée, enfilez la tenue sexy adéquate pour des sessions torrides !"
                          url="#"
                />

                <Top2Card image={Img2}
                          title="Nuisette Ouverte Et String Tulle Noir"
                          description="Nuisette moulante en tulle noir élastique, seins ouvert. Anneaux noirs au démarrage des bretelles.Finition de qualité avec bordure élastique ornée de croquet autour de la poitrine et du tour de dos.Bretelles réglables à l'avant. Matière douce et légère, pour être la plus séduisante tout en confort.
Un pendentif sceau Dorcel noir se trouve à l'entre-sein, composé de métal sans nickel. Mini string ficelle noir en tulle assorti."
                          price="price"
                          url="#"
                />
            </div>
        </section>
    )
}

export default Top2
