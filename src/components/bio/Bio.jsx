/* eslint-disable react/no-unescaped-entities */
import "./Bio.css"

function Bio() {
  return (
    <article className="bio-container">
      <section className="citation-container">
        <span className="quotes">"</span>
        <p className="text-bio"> 
Le fil rouge de tout ceci est la communication et la volonté de savoir qui est mon interlocuteur. Qui est-il ? Que ressent-il ? Dans quelle voie souhaite t-il aller ? <br/>Une communication que je souhaite la plus organique possible, dans le respect de chacun et s'adaptant à diverses situations. 
        </p>
        <span className="quotes">"</span>
      </section>
    <div className="video-bio"></div>
    </article>
  )
}

export default Bio