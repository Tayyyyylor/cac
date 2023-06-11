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
        <a href="/">
    <img className="img-logo" src="./TRANSPARENT.png" alt=""/>
        </a>
  ) : (
          <VisibilitySensor onChange={handleVisibilityLogo}>
            <div >
              <a href="/" className="logo-container">
                
    <img className="img-logo" src="./TRANSPARENT.png" alt=""/>
    <h1 ref={elementRef} className="main-title"> De <span className="color-letter-title">c</span>oeur à <span className="color-letter-title">c</span>oeur</h1>
</a>
            </div>
     </VisibilitySensor>
  )}
    
    
    </>
  );
}

export default Logo