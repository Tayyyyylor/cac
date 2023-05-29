/* eslint-disable react/no-unescaped-entities */
import "./Bio.css"

function Bio() {
  return (
    <article className="bio-container">
        <hgroup className="title-container">
        <h2 className="title-bio"> Conseil en langage verbal - Non verbal - Écrit </h2>
        <h6 className="name-bio"> PAR <span className='color-letter-capital'>F</span>RANCIS <span className='color-letter-capital'>D</span>ECKER</h6>
        </hgroup>
        <p className="text-bio">C 'est d'une existence atypique, constituée de moments montagneux, tantôt planes, tantôt doux, ponctuée de rencontres indélébiles avec les Grands Singes, le monde tribal ( Le peuple Maasaï et le peuple Sioux Lakota ) que commença une partie de ma vie. Puis vinrent les expériences d'acteur, de coach en gestuelle sur des films et une plongée dans le monde du spiritueux avec mes premières expériences d'orateur dans des palaces, des casinos.  </p>
    <div className="video-bio"></div>
    </article>
  )
}

export default Bio