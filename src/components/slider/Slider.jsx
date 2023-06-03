import { useState, useEffect, useRef, useMemo, useLayoutEffect } from 'react';
import "./Slider.css";
import VisibilitySensor from "react-visibility-sensor"


function Slider() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


  const photosData = useMemo(() => [
    { src: "./slide1.jpg", title:"Conseil en langage verbal - Non verbal - Écrit", description:"PAR FRANCIS DECKER"},
    { src: "./slide2.jpg", title:"Conseil en langage verbal - Non verbal - Écrit", description:"PAR FRANCIS DECKER"},
    { src: "./slide3.jpg", title:"Conseil en langage verbal - Non verbal - Écrit", description:"PAR FRANCIS DECKER"},
    { src: "./slide4.jpg", title:"Conseil en langage verbal - Non verbal - Écrit", description:"PAR FRANCIS DECKER"},
    { src: "./slide5.png", title:"Conseil en langage verbal - Non verbal - Écrit", description:"PAR FRANCIS DECKER"},
  ], []) 
  const intervalRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (isVisible) {
      textRef.current.classList.add("text-slider-visible");
      setIsVisible(false); // Remettre à false pour désactiver l'animation après une seule exécution
    }
  }, [isVisible]);

  const handleVisibilitySlider = (visible) => {
    setIsVisible(visible);
  };


  useEffect(() => {
    // met à jour l'image toutes les 6 secondes
    intervalRef.current = setInterval(() => {
      if (currentPhoto === photosData.length - 1) {
        setCurrentPhoto(0);
      } else {
        setCurrentPhoto(currentPhoto + 1);
      }
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentPhoto, photosData.length]);

  useEffect(() => {
    imgRef.current.src = photosData[currentPhoto].src;
  }, [currentPhoto, photosData]);

  return (
    <div id="slider">
      <img src={photosData[currentPhoto].src} alt="img slider" ref={imgRef} className="img-slider"/>

      <VisibilitySensor onChange={handleVisibilitySlider}>
      <div ref={textRef} className='text-slider-container'>
      <h2 className='title-header' ref={imgRef}>{photosData[currentPhoto].title }</h2>

      <p  className='p-slider'>{photosData[currentPhoto].description}</p>
      </div>
      </VisibilitySensor>

    </div>
  );
}

export default Slider;
