/* eslint-disable react/no-unescaped-entities */
// import VideoPlayer from "../videoPlayer/VideoPlayer"
import 'intersection-observer';
import "./Bio.css"
import { useEffect, useRef } from 'react';

function Bio() {
 
  const bioRef = useRef(null);

  useEffect(() => {
    const textElement = bioRef.current;
    const text = ` "Savoir vraiment communiquer avec ses semblables, c'est se sentir plus vivant, c'est affirmer son existence de manière plus prononcée." `
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, Math.random() * 10 + 15); // Définissez l'intervalle de frappe ici
      }
    }

    typeWriter();
  }, []);

  return (
    <article className="bio-container">
      <h2 className="title-bio">Avant-Propos</h2>
      <section className="citation-container">
        <p className="text-bio" ref={bioRef}/> 
      </section>
    </article>
  )
}

export default Bio