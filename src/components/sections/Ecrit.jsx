/* eslint-disable react/no-unescaped-entities */
import "./Section.css"
import { useState } from "react";
import 'intersection-observer';


function Ecrit() {
        const [textVisible, setTextVisible] = useState(false);

        const toggleText = () => {
                setTextVisible(!textVisible);
              };
  return (
    <article className='article-container'>
    <section className='title-text-container'>
        <h2 className='title-article'>Langage Écrit</h2>
        <img src="./BANNIERE.png" alt=""className="img-article"/>
        <div className={textVisible ? 'show' : 'hide'}>

        <p className='text-article'>L’écriture est un moyen extraordinaire de partager notre voix et nos pensées d'une
manière réfléchie et durable. C'est comme si nos mots prenaient vie sur la page,
transmettant nos idées et nos émotions avec une profondeur et une clarté
uniques.</p>
        <br/>
        <p className='text-article'>Je crois en la puissance de l'écriture pour t'aider à te développer et à prendre le
contrôle de tes premières impressions. L'écriture te permet de structurer tes
idées, de les affiner et de les communiquer avec conviction.</p>
        <br/>
        <p className='text-article'>Je suis là pour t'accompagner dans cet art de l'écriture. Ensemble, nous allons
explorer différentes techniques pour que tu puisses exprimer tes idées avec
confiance et clarté. Que ce soit à travers une lettre de motivation percutante ou
une correspondance amoureuse captivante, nous allons travailler sur l'écriture
comme un moyen de créer une connexion profonde et authentique.</p>
        <br/>
        <p className='text-article'>Chez Coeur à Coeur, mon objectif est que tu te sentes soutenu et encouragé dans
ton développement personnel par le biais de l'écriture. En utilisant le langage écrit,
nous allons créer un espace où tu pourras t'épanouir, où tes mots auront un
impact significatif.</p>
        <br/>
        <p className='text-article'>Prêt à explorer le potentiel de l'écriture pour te guider vers le succès et la confiance
en toi ? Je serai là à chaque étape, mon ami, pour t'inspirer, te guider et t'encourager
à utiliser les mots écrits comme un outil puissant pour te développer et te connecter
avec les autres de manière profonde et authentique.</p>
        </div>
        <button onClick={toggleText} className="button-article">{textVisible ? "Retour" : "Voir Plus"}</button>

        <img src='' className='img-article' alt=''/>
    </section>
</article>
  )
}

export default Ecrit