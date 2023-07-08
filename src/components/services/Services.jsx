/* eslint-disable react/no-unescaped-entities */
import VisibilitySensor from "react-visibility-sensor";
import "./Services.css"
import 'intersection-observer';
import { useState, useLayoutEffect, useRef } from "react";

function Services() {

const [isVisible, setIsVisible] = useState(false);

const isMobile = window.innerWidth < 1024;

        const serviceImg1Ref = useRef(null);
        const serviceText1Ref = useRef(null);
        const serviceImg2Ref = useRef(null);
        const serviceText2Ref = useRef(null);
        const serviceImg3Ref = useRef(null);
        const serviceText3Ref = useRef(null);
        const serviceImg4Ref = useRef(null);
        const serviceText4Ref = useRef(null);
            
              const handleVisibilityServices = (visible) => {
                setIsVisible(visible);
              };
            
              useLayoutEffect(() => {
                if (isVisible) {
                  serviceImg1Ref.current.classList.add("img-services-slidein");
                  serviceText1Ref.current.classList.add("icon-text-text-slidein");
                  serviceImg2Ref.current.classList.add("img-services-slidein");
                  serviceText2Ref.current.classList.add("icon-text-text-slidein");
                  serviceImg3Ref.current.classList.add("img-services-slidein");
                  serviceText3Ref.current.classList.add("icon-text-text-slidein");
                  serviceImg4Ref.current.classList.add("img-services-slidein");
                  serviceText4Ref.current.classList.add("icon-text-text-slidein");
                  setIsVisible(false);
                }
              }, [isVisible]);

  return (
<>
        {isMobile ? (
                <article  id="id-services" className="services-container">
                <h2 className="services-title">sphères abordées</h2>
               
                <div className="cards-container-services">
        
                <div className="icon-text-container">
                        <img src="./CoeurBlanc.png" alt="" className="img-services" />
                        <h2>Préparation au(x) rendez-vous amoureux</h2>                          
                </div>
        
                <div className="icon-text-container">
                                                  <img src="./EntretienBlanc.png" alt="" className="img-services" />
                        <h2>Préparation dans l'objectif d'un recrutement</h2>                          
                </div>
        
        
                <div className="icon-text-container">
                                                  <img src="./ReseauxBlanc.png" alt="" className="img-services" />
                        <h2>Préparation au(x) rendez-vous amoureux</h2>                          
                </div>
        
        
                <div className="icon-text-container">
                                                  <img src="./AtelierBlanc.png" alt="" className="img-services" />
                        <h2>Préparation au(x) rendez-vous amoureux</h2>                          
                </div>
        
                </div>
         </article> 
        ) :  ( <article  id="id-services" className="services-container">
        <h2 className="services-title">sphères abordées</h2>
        <div className="cards-container-services">

<VisibilitySensor onChange={handleVisibilityServices}>
        <div className="icon-text-container">
                                                          <img ref={serviceImg1Ref} src="./CoeurBlanc.png" alt="" className="img-services" />
                                                          <div>
                <h2>Préparation au(x) rendez-vous amoureux</h2>                                          
                <p ref={serviceText1Ref} className="icon-text-text">Avec mon coaching : Cela peut être le premier, le second <span className="color-text-services">rendez-vous amoureux...</span>  ou une discussion pouvant être un moment de bascule dans l'objectif de préservation d'un couple ou d'un couple en devenir. </p> </div>
        </div>
</VisibilitySensor>

<VisibilitySensor onChange={handleVisibilityServices}>
        <div className="icon-text-container">
                                                          <img ref={serviceImg2Ref} src="./EntretienBlanc.png" alt="" className="img-services" />
                                                          <div>
                <h2>Préparation dans l'objectif d'un recrutement</h2>                                          
                                                          
                <p ref={serviceText2Ref} className="icon-text-text">" Avoir le job " est un idéal. Créer des liens solides lors d'une <span className="color-text-services">entrevue pour un recrutement</span> est tout aussi vital. Si l'opportunité vous échappe, le lien que vous aurez créé vous permettra d'être recontacté pour une / des opportunités aussi passionnantes.</p>
                                                                  </div>
        </div>
</VisibilitySensor>


<VisibilitySensor onChange={handleVisibilityServices}>
        <div className="icon-text-container">
                                                          <img ref={serviceImg3Ref} src="./ReseauxBlanc.png" alt="" className="img-services" />
                                                          <div>
                                                                  
                                                          
                <h2>Préparation à l'art oratoire</h2>                                          
                                                          
                                                                  <p ref={serviceText3Ref} className="icon-text-text"> <span className="color-text-services">L'art oratoire</span> peut être perçue comme l'extension des 2 premières sphères de communication précédentes. La différence est qu'elle s'effectue à voix haute et devant un large public. L'objectif reste le même : créer des liens avec ce public. Les champs d'application sont variés : Allocution chef(f)e d'entreprise, art oratoire par des étudiants devant un public. L'art oratoire s'adapte à l'art, via le théâtre, le cinéma et se transforme en monologue.</p></div>
        </div>
</VisibilitySensor>


<VisibilitySensor onChange={handleVisibilityServices}>
        <div className="icon-text-container">
                                                          <img ref={serviceImg4Ref} src="./AtelierBlanc.png" alt="" className="img-services" />
                                                          <div>
                                                                  
                                                          
                <h2>Préparation au(x) rendez-vous amoureux</h2>                                          
                                                          
                <p ref={serviceText4Ref} className="icon-text-text">Un des <span className="color-text-services">ateliers</span> que je propose est une expérience unique avec un acteur jouant
le rôle de l'employeur. Dans cet atelier interactif, tu auras l'opportunité de pratiquer et
de simuler un véritable entretien d'embauche. Cela te permettra de te familiariser
avec différentes situations et de perfectionner tes compétences en communication
professionnelle. Grâce à cet atelier, tu gagneras en confiance et en aisance lors de
                                                                          tes futurs entretiens.</p>
                                                                  </div>
        </div>
</VisibilitySensor>

        </div>
    </article>)}
    
                </>
  )
}

export default Services