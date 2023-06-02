/* eslint-disable react/prop-types */
import "./Cards.css"

function Cards({card}) {
  return (
  
    <div className='cards-container'>
        <img src={card.src} alt={card.alt} className='img-cards'/>
        <h5 className='title-cards'>{card.title}</h5>
        <p className='text-cards'><span className="quotes-cards">&quot;</span>{card.desc}<span className="quotes-cards">&quot;</span></p>
        <button className='button-cards'>voir plus</button>
    </div>
  
  )
}

export default Cards