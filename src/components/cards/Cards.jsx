/* eslint-disable react/prop-types */
import "./Cards.css"

function Cards({src, alt, desc, title}) {
  return (
  
    <div className='cards-container'>
        <img src={src} alt={alt} className='img-cards'/>
        <h5 className='title-cards'>{title}</h5>
        <p className='text-cards'><span className="quotes-cards">&quot;</span>{desc}<span className="quotes-cards">&quot;</span></p>
        <button className='button-cards'>voir plus</button>
    </div>
  
  )
}

export default Cards