/* eslint-disable react/no-unescaped-entities */
import "./Section.css"
import { useState, useRef, useLayoutEffect } from "react";
import 'intersection-observer';
import VisibilitySensor from "react-visibility-sensor";


function Ecrit() {
        const [textVisible, setTextVisible] = useState(false);

        const toggleText = () => {
                setTextVisible(!textVisible);
              };
              const [isVisible, setIsVisible] = useState(false);
              const textRef = useRef(null);
              const text2Ref = useRef(null);
              const text3Ref = useRef(null);
              const text4Ref = useRef(null);
              const text5Ref = useRef(null);
              const titleRef = useRef(null);
              const imgRef = useRef(null);
            
              const handleVisibilityNonVerbal = (visible) => {
                setIsVisible(visible);
              };
            
              useLayoutEffect(() => {
                if (isVisible) {
                  textRef.current.classList.add("text-article-visible");
                  text2Ref.current.classList.add("text-article-visible-left");
                  text3Ref.current.classList.add("text-article-visible");
                  text4Ref.current.classList.add("text-article-visible-left");
                  text5Ref.current.classList.add("text-article-visible");
                  titleRef.current.classList.add("title-fadeIn");
                  imgRef.current.classList.add("img-fadeIn");
                  setIsVisible(false);
                }
              }, [isVisible]);
  return (
    <article id="id-ecrit" className='article-container'>
    <section className='title-text-container'>

        <VisibilitySensor onChange={handleVisibilityNonVerbal}>
        <h2 ref={titleRef} className='title-article'>Langage Écrit</h2>
        </VisibilitySensor>

        <VisibilitySensor onChange={handleVisibilityNonVerbal}>
          <div ref={imgRef} className="banniere-article">    <span className="quotes-article-start">"</span><p className='text-article-test'>L’écriture est un moyen extraordinaire de partager notre voix et nos pensées d'une
manière réfléchie et durable. C'est comme si nos mots prenaient vie sur la page,
transmettant nos idées et nos émotions avec une profondeur et une clarté
uniques.</p> <span className="quotes-article-end-ecrit">"</span>
</div>
        </VisibilitySensor>

        <div className={textVisible ? 'show' : 'hide'}>


        <VisibilitySensor onChange={handleVisibilityNonVerbal}>
        <p ref={textRef} className='text-article'>L’écriture est un moyen extraordinaire de partager notre voix et nos pensées d'une
manière réfléchie et durable. C'est comme si nos mots prenaient vie sur la page,
transmettant nos idées et nos émotions avec une profondeur et une clarté
uniques.</p>
</VisibilitySensor>

        <br/>

        <VisibilitySensor onChange={handleVisibilityNonVerbal}>
        <p ref={text2Ref} className='text-article'>Je crois en la puissance de l'écriture pour t'aider à te développer et à prendre le
contrôle de tes premières impressions. L'écriture te permet de structurer tes
idées, de les affiner et de les communiquer avec conviction.</p>
</VisibilitySensor>

        <br/>

        <VisibilitySensor onChange={handleVisibilityNonVerbal}>
        <p ref={text3Ref} className='text-article'>Je suis là pour t'accompagner dans cet art de l'écriture. Ensemble, nous allons
explorer différentes techniques pour que tu puisses exprimer tes idées avec
confiance et clarté. Que ce soit à travers une lettre de motivation percutante ou
une correspondance amoureuse captivante, nous allons travailler sur l'écriture
comme un moyen de créer une connexion profonde et authentique.</p>
</VisibilitySensor>

        <br/>

        <VisibilitySensor onChange={handleVisibilityNonVerbal}>
        <p ref={text4Ref} className='text-article'>Chez Coeur à Coeur, mon objectif est que tu te sentes soutenu et encouragé dans
ton développement personnel par le biais de l'écriture. En utilisant le langage écrit,
nous allons créer un espace où tu pourras t'épanouir, où tes mots auront un
impact significatif.</p>
</VisibilitySensor>

        <br/>

        <VisibilitySensor onChange={handleVisibilityNonVerbal}>
        <p ref={text5Ref} className='text-article'>Prêt à explorer le potentiel de l'écriture pour te guider vers le succès et la confiance
en toi ? Je serai là à chaque étape, mon ami, pour t'inspirer, te guider et t'encourager
à utiliser les mots écrits comme un outil puissant pour te développer et te connecter
avec les autres de manière profonde et authentique.</p>
</VisibilitySensor>
        </div>
        <button onClick={toggleText} className="button-article">{textVisible ? "Retour" : "Voir Plus"}</button>

        <img src='' className='img-article' alt=''/>
    </section>
</article>
  )
}

export default Ecrit