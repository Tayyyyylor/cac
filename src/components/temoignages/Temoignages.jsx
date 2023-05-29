import "./Temoignages.css"
import Cards from "../cards/Cards"

function Temoignages() {

  const cardsData = [
    {
      src:"./Identitetransparent.png",
      alt:"lorem",
      title:"Nadège, 32 ans, commerciale",
      desc:"Merci infiniment à Francis pour son soutien et son accompagnement précieux. Grâce à lui, j'ai pu retrouver ma confiance en moi et atteindre mes objectifs.",
    },
    {
      src:"./Identitetransparent.png",
      alt:"lorem",
      title:"Nadège, 32 ans, commerciale",
      desc:"Merci infiniment à Francis pour son soutien et son accompagnement précieux. Grâce à lui, j'ai pu retrouver ma confiance en moi et atteindre mes objectifs.",
    },
    {
      src:"./Identitetransparent.png",
      alt:"lorem",
      title:"Nadège, 32 ans, commerciale",
      desc:"Merci infiniment à Francis pour son soutien et son accompagnement précieux. Grâce à lui, j'ai pu retrouver ma confiance en moi et atteindre mes objectifs.",
    },
    
  ]
  return (
    <article className="temoignage-container">
    <h2 className="title-temoignage">Temoignages</h2>
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