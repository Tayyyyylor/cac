/* eslint-disable react/no-unescaped-entities */
// import VideoPlayer from "../videoPlayer/VideoPlayer"
import 'intersection-observer';
import "./Bio.css"
import { useEffect, useRef } from 'react';

function Bio() {
 
  const bioRef = useRef(null);

  useEffect(() => {
    const textElement = bioRef.current;
    const text = "Le fil rouge de tout ceci est la communication et la volonté de savoir qui est mon interlocuteur. Qui est-il ? Que ressent-il ? Dans quelle voie souhaite t-il aller ? <br/>Une communication que je souhaite la plus organique possible, dans le respect de chacun et s'adaptant à diverses situations."; 
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, Math.random() * 200 + 100); // Définissez l'intervalle de frappe ici
      }
    }

    typeWriter();
  }, []);

  return (
    <article className="bio-container">
      <section className="citation-container">
        <span className="quotes">"</span>
        <p className="text-bio" ref={bioRef}> 

        </p>
        <span className="quotes">"</span>
      </section>
    {/* <div className="video-bio"><VideoPlayer/></div> */}
    </article>
  )
}

export default Bio