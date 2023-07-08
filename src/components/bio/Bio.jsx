/* eslint-disable react/no-unescaped-entities */
// import VideoPlayer from "../videoPlayer/VideoPlayer"
import 'intersection-observer';
import "./Bio.css"
import { useEffect, useRef } from 'react';

function Bio() {
 
  const bioRef = useRef(null);

  useEffect(() => {
    const textElement = bioRef.current;
    const text = `Plus que d'${<span className='text-bio-italic'>avoir la fille</span>} ou ${<span className='text-bio-italic'>d'avoir le job</span>}, je dévie mon regard sur ${<span className='text-bio-italic'> Je crée un lien suffisamment fort pour créer une mémoire durable et que les personnes rencontrées se souviennent de moi et sur du long terme</span>}

    A partir de ce principe, j'active des connexions plus grandes, dirigées vers une sensibilité plus accrue, parce que tournées vers l'Humain*. Ces connexions pourraient m'aider à obtenir quelque chose de différent, d'inédit et peut être de plus passionnant.
    
    La première phrase qui démontrera votre intérêt véritable pour votre interlocutrice / teur est celle-ci : " Comment allez-vous ? " Cette phrase interrogative a le but sincère de vous enquérir de l'état interne de la personne devant vous. 
    
    "Savoir vraiment communiquer avec ses semblables, c'est se sentir plus vivant, c'est affirmer son existence de manière plus prononcée."
    
    * Selon le dictionnaire Larousse, l'une des définitions de "être humanisé" : 
    
    "Devenir plus compréhensif, plus attentif aux autres. : Un homme dur qui s'est humanisé avec l'âge. `
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, Math.random() * 30 + 20); // Définissez l'intervalle de frappe ici
      }
    }

    typeWriter();
  }, []);

  return (
    <article className="bio-container">
      <h2 className="title-bio">Avant-Propos</h2>
      <section className="citation-container">
        <span className="quotes">"</span>
        <p className="text-bio" ref={bioRef}/> 
        <span className="quotes">"</span>
      </section>
    {/* <div className="video-bio"><VideoPlayer/></div> */}
    </article>
  )
}

export default Bio