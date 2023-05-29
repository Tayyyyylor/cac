import "./Temoignages.css"
import Cards from "../cards/Cards"

function Temoignages() {

  const cardsData = [
    {
      src:"./slide6.jpg",
      alt:"lorem",
      title:"lorem ipsum",
      desc:"lorem ipsum",
    },
    {
      src:"./slide6.jpg",
      alt:"lorem",
      title:"lorem ipsum",
      desc:"lorem ipsum",
    },
    {
      src:"./slide6.jpg",
      alt:"lorem",
      title:"lorem ipsum",
      desc:"lorem ipsum",
    },
  ]
  return (
    <article className="temoignage-container">
    <h2>Temoignages</h2>
    <section className="card-temoignage-container">
    {cardsData.slice(0, 3).map((card, index) => (
      <Cards 
      src={card.src}
      alt={card.alt}
      title={card.title}
      desc={card.desc}
      key={index}
      />
      ))}
      </section>
    </article>
  )
}

export default Temoignages