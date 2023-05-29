/* eslint-disable react/no-unescaped-entities */
import "./Section.css"
import { useState } from "react";

function Verbal() {
        const [textVisible, setTextVisible] = useState(false);

        const toggleText = () => {
                setTextVisible(!textVisible);
              };
  return (
    <article className='article-container-blue'>
    <section className='title-text-container'>
        <h2 className='title-article'>Langage Verbal</h2>
        <img src="./BANNIERE.png" alt=""className="img-article"/>
       <div className={textVisible ? 'show' : 'hide'}>

        <p className='text-article'>Le langage verbal est tout aussi essentiel que le langage non-verbal dans notre
façon de communiquer. C'est ce que nous exprimons à travers nos mots, nos
phrases et notre ton de voix. C'est notre façon de partager nos pensées, nos
émotions et nos idées avec les autres.</p>
        <br/>
        <p className='text-article'>La puissance des mots ne peut être sous-estimée. Ils ont le pouvoir de créer des
liens profonds, de transmettre des encouragements chaleureux ou des critiques
blessantes. Choisir les bons mots et les prononcer avec la bonne intention peut
véritablement changer la donne dans nos interactions.</p>
        <br/>
        <p className='text-article'>Je mets un point d'honneur à accorder une attention particulière au langage verbal.
Je veux t'aider à trouver les mots justes pour exprimer qui tu es, ce que tu
ressens et où tu veux aller dans la vie.</p>
        <br/>
        <p className='text-article'>Il ne s'agit pas seulement de trouver les mots, mais aussi de comprendre comment
les utiliser efficacement. Je veux t'aider à développer ton éloquence et ta clarté.
Que ce soit pour te préparer à ton premier entretien d'embauche ou pour être à l'aise
lors de ton prochain rendez-vous amoureux, je suis là pour te guider.</p>
        <br/>
        <p className='text-article'>Chez Coeur à Coeur, je crois en l'importance de la bienveillance et de la
compréhension. Je suis là pour t'aider à te développer et à t'épanouir. Je veux
que tu te sentes en confiance pour exprimer tes besoins, tes aspirations et tes
émotions avec authenticité.</p>
        <br/>
        <p className='text-article'>Alors, prêt à explorer ensemble la puissance des mots et du langage verbal ? Je
suis là pour t'accompagner, mon ami, afin que tu puisses trouver ta voix et te faire
entendre dans toutes les situations. Nous allons travailler main dans la main pour
que tu puisses atteindre tes objectifs avec confiance et conviction.</p>
       </div>
       <button onClick={toggleText} className="button-article">{textVisible ? "Retour" : "Voir Plus"}</button>
    </section>
</article>
  )
}

export default Verbal