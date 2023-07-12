import "./Contact.css"
import logoInstagram from "/instagramColor.png"
import logoFacebook from "/facebook.png"
import logo from "/TRANSPARENT.png"

function Contact() {
  return (
      <article className="bloc-contact-container">
          <h2 className="title-contact">Contact</h2>
          <p className="intro-contact">Vous souhaitez organiser une conférence, demander une médiation, assister à un atelier ou à une rencontre, prendre part à une cérémonie, solliciter une consultation, connaître mes conditions ou obtenir des renseignements...</p>
          <div className="section-contact-container">    
              <section className="info-contact-container">
                  <div className="logo-contact-container">
                      
                      <img className='logo-contact' src={logo} alt="logo" />
                  </div>
                  <div className="info-text-contact">
                      <div className="infos">
                  <p>TÉL 06 10 22 76 20</p>
                      <p>ALLÉE SARASPE 64600 ANGLET</p>
</div>
                      <div className="rs-container-contact">
          <a href="https://www.instagram.com/varo_dom/">
          <img src={logoInstagram} className="logo-rs"/>
          </a>

          <a href="https://www.facebook.com/francis.decker.9/">
          <img src={logoFacebook} className="logo-rs"/>
          </a>
        </div>
                      </div>
                      
               
          </section>
          <section className="form-contact-container">
                  <form method="post" className="form-contact">
                      <div className="input-top-contact">
                          
                  <input className="input-contact" type="text" placeholder="Nom :" />
                          <input className="input-contact" type="text" placeholder="Email : " />
                      </div>
                          
                      <textarea className="input-contact" name="message" placeholder="Message : " id="" cols="30" rows="10"></textarea>
                      <button type="submit" className="button-form-contact">Envoi</button>
              </form>
              </section>
          </div>
              
    </article>
  )
}

export default Contact