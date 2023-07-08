import "./Footer.css"
import logoInstagram from "../../assets/instagramColor.png"
import logoFacebook from "../../assets/facebook.png"

function Footer() {

  return (
   <footer id="id-contact" className="footer-container">


        <div className="rs-container">
          <a href="https://www.instagram.com/varo_dom/">
          <img src={logoInstagram} className="logo-rs"/>
          </a>

          <a href="https://www.facebook.com/francis.decker.9/">
          <img src={logoFacebook} className="logo-rs"/>
          </a>
        </div>
          
   </footer>
  )
}

export default Footer