/* eslint-disable react/no-unescaped-entities */
import 'intersection-observer';
import "./Bio.css"
import { useEffect, useRef, useState } from 'react';

function Bio() {
 
  const [textVisible, setTextVisible] = useState(false);
  const bioRef = useRef(null);

  useEffect(() => {
    const textElement = bioRef.current;
    const text = ` "Savoir vraiment communiquer avec ses semblables, c'est se sentir plus vivant, c'est affirmer son existence de manière plus prononcée." `
    let index = 0;

    const typeWriter = () => {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, Math.random() * 10 + 15); // Définissez l'intervalle de frappe ici
      }
    }

    typeWriter();
  }, []);


  const toggleText = () => {
    setTextVisible(!textVisible);
  };

  return (
    <article className="bio-container">
      <h2 className="title-bio">Avant-Propos</h2>
      <section className="citation-container">
        <p className="citation-bio" ref={bioRef} /> 
        <div className={textVisible ? 'show' : 'hide'}>
          <p className='text-bio'>Plus que d'avoir la fille ou d'avoir le job, je dévie mon regard sur "Je crée un lien suffisamment fort pour créer une mémoire durable et que les personnes rencontrées se souviennent de moi et sur du long terme"</p>
<p className='text-bio'>
            
A partir de ce principe, j'active des connexions plus grandes, dirigées vers une sensibilité plus accrue, parce que tournées vers l'Humain*. Ces connexions pourraient m'aider à obtenir quelque chose de différent, d'inédit et peut être de plus passionnant.
</p>
<p className='text-bio'>
La première phrase qui démontrera votre intérêt véritable pour votre interlocutrice / teur est celle-ci : " Comment allez-vous ? " Cette phrase interrogative a le but sincère de vous enquérir de l'état interne de la personne devant vous. 
</p>

<p className='text-bio'>
            
"Savoir vraiment communiquer avec ses semblables, c'est se sentir plus vivant, c'est affirmer son existence de manière plus prononcée."
</p>
          <p className='text-bio'>

          * Selon le dictionnaire Larousse, l'une des définitions de "être humanisé" : 

"Devenir plus compréhensif, plus attentif aux autres. : Un homme dur qui s'est humanisé avec l'âge."</p>
        </div>
      </section>
      <button className='button-bio' onClick={toggleText}>{textVisible ? "Retour" : "Voir Plus"}</button>
    </article>
  )
}

export default Bio