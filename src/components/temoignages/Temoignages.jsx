import "./Temoignages.css"
import 'intersection-observer';""
import Cards from "../cards/Cards"

function Temoignages() {

  const cardsData = [
    {
     
      title:"Elisa",
      desc:`" Je suis dans l'arrière-pays niçois, en juin 2022. Nous sommes dimanche, la température est clémente et le lieu où je me trouve est magnifique.`,
    },
    {
      
      title:"Nadège, 32 ans",
      desc:"Merci infiniment à Francis pour son soutien et son accompagnement précieux. Grâce à lui, j'ai pu retrouver ma confiance en moi et atteindre mes objectifs.",
    },
    {
    
      title:"Nadège, 32 ans",
      desc:"Merci infiniment à Francis pour son soutien et son accompagnement précieux. Grâce à lui, j'ai pu retrouver ma confiance en moi et atteindre mes objectifs.",
    },
    
  ]

 
  return (
    <article id="id-temoignages" className="temoignage-container">
    <h2 className="title-temoignage">Temoignages</h2>
    <section className="card-temoignage-container">
    {cardsData.slice(0, 3).map((card, index) => (
      <Cards 
      card={card}
      key={index}
      />
      ))}
      </section>
   
    </article>
  )
}

export default Temoignages