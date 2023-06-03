import "./Logo.css"
import { useState, useLayoutEffect, useRef } from "react"
import VisibilitySensor from "react-visibility-sensor"

function Logo() {

  const [isVisible, setIsVisible] = useState(false);

  const isMobile = window.innerWidth < 900;


  const elementRef = useRef(null);
  const handleVisibilityLogo = (visible) => {
    setIsVisible(visible);
  };

  useLayoutEffect(() => {
    if (isVisible) {
      elementRef.current.classList.add("main-title-visible");
      setIsVisible(false); // Remettre à false pour désactiver l'animation après une seule exécution
    }
  }, [isVisible]);


  return (
    <>
  {isMobile ? (
    <img className="img-logo" src="./TRANSPARENT.png" alt=""/>
  ) : (
    <VisibilitySensor onChange={handleVisibilityLogo}>
    <h1 ref={elementRef} className="main-title"> De <span className="color-letter-title">c</span>oeur à <span className="color-letter-title">c</span>oeur</h1>
     </VisibilitySensor>
  )}
    
    
    </>
  );
}

export default Logo