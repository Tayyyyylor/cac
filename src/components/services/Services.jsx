/* eslint-disable react/no-unescaped-entities */
import "./Services.css"
import 'intersection-observer';

function Services() {
  return (
    <article  id="id-services" className="services-container">
        <h2 className="services-title">services</h2>
        <p className="text-services">
        Laisse-moi te parler des services uniques que je propose chez Coeur à Coeur. Mon
objectif est de t'aider à développer ta confiance en toi et à te préparer pour des
moments clés de ta vie, tels que ton premier rendez-vous amoureux ou ton premier
entretien d'embauche.
        </p>
        <div className="cards-container-services">

        <div className="icon-text-container">
                <img src="./coeurjaune.png" alt="" className="img-services"/>
                <p className="icon-text-text">Avec mon coaching : <span className="color-text-services">Premier rendez-vous amoureux</span>, je vais t'accompagner pour
que tu te sentes à l'aise et confiant lors de cette rencontre spéciale. Nous allons
travailler sur ta communication, ton langage corporel et tes interactions pour que tu
puisses créer une connexion authentique et mémorable avec ton partenaire
potentiel.</p>
        </div>
        <div className="icon-text-container">
                <img src="./entretienjaune.png" alt="" className="img-services"/>
                <p className="icon-text-text">Le coaching : <span className="color-text-services">Premier entretien d'embauche</span> est une autre facette de mes
services. Je vais te guider à travers les étapes clés de la préparation, en te
fournissant des conseils pratiques et des techniques éprouvées pour que tu puisses
te démarquer et impressionner les recruteurs. Ensemble, nous allons travailler sur ta
présentation, tes réponses aux questions et ta confiance en toi pour que tu puisses
faire une forte impression lors de cet entretien crucial.</p>
        </div>
        <div className="icon-text-container">
                <img src="./reseauxjaune.png" alt="" className="img-services"/>
                <p className="icon-text-text">Je propose un <span className="color-text-services">accompagnement personnalisé </span>sur les réseaux sociaux et l'utilisation
du téléphone portable pour renforcer ta confiance en toi et améliorer tes
compétences de communication. Nous explorerons ensemble comment utiliser ces
outils de manière constructive, en mettant l'accent sur la communication efficace, la
gestion de ton image en ligne et la création de relations solides.</p>
        </div>
        <div className="icon-text-container">
                <img src="./atelier.png" alt="" className="img-services"/>
                <p className="icon-text-text">Un des <span className="color-text-services">ateliers</span> que je propose est une expérience unique avec un acteur jouant
le rôle de l'employeur. Dans cet atelier interactif, tu auras l'opportunité de pratiquer et
de simuler un véritable entretien d'embauche. Cela te permettra de te familiariser
avec différentes situations et de perfectionner tes compétences en communication
professionnelle. Grâce à cet atelier, tu gagneras en confiance et en aisance lors de
tes futurs entretiens.</p>
        </div>
        </div>
        <p className="text-services">En plus de ces services ciblés, je propose également un suivi et un
accompagnement personnalisés pour ton développement personnel. Je crois
fermement en l'importance de cette croissance continue, et je serai là pour
t'encourager, te soutenir et te guider tout au long de ce voyage. Nous travaillerons
ensemble pour identifier tes objectifs, surmonter les obstacles et maximiser ton
potentiel, afin que tu puisses évoluer et atteindre une confiance durable dans tous
les aspects de ta vie.</p>
<p className="text-services">Grâce à des
séances de coaching par vidéo, nous pourrons travailler en face à face, même à
distance, pour des simulations d'entretiens d'embauche, des exercices de
communication et des conseils pratiques. Cet accompagnement flexible s'adapte à
tes besoins individuels pour t'aider à réussir dans notre monde connecté.</p>
    </article>
  )
}

export default Services