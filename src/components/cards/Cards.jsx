import "./Cards.css"

function Cards(src, alt, desc, title) {
  return (
  
    <div className='cards-container'>
        <img src={src} alt={alt} className='img-cards'/>
        <h2 className='title-cards'>{title}</h2>
        <p className='text-cards'>{desc}</p>
        <button className='button-cards'>voir plus</button>
    </div>
  
  )
}

export default Cards