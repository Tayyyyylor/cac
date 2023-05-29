import { useState, useEffect, useRef, useMemo } from 'react';
import "./Slider.css";

function Slider() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photosData = useMemo(() => [
    { src: "./slide1.jpg", title:"lorem", description:"lorem"},
    { src: "./slide2.jpg", title:"lorem", description:"lorem"},
    { src: "./slide3.jpg", title:"lorem", description:"lorem"},
    { src: "./slide4.jpg", title:"lorem", description:"lorem"},
    { src: "./slide5.png", title:"lorem", description:"lorem"},
    { src: "./slide6.jpg", title:"lorem", description:"lorem"},
    { src: "./slide7.jpg", title:"lorem", description:"lorem"},
  ], []) 
  const intervalRef = useRef(null);
  const imgRef = useRef(null);


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

      <div className='text-slider-container'>
      <h2 className='title-header' ref={imgRef}>{photosData[currentPhoto].title }</h2>
      <p className='p-slider'>{photosData[currentPhoto].description}</p>
      </div>
    </div>
  );
}

export default Slider;
