import "./Footer.css"
import { useState } from "react";
import logoInstagram from "../../assets/instagramColor.png"
import logoFacebook from "../../assets/facebook.png"

function Footer() {

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    demande: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
   <footer id="id-contact" className="footer-container">
      <h2 className="title-footer">Contact</h2>
      <div className="form-rs-container">

    <form method="post" className="form-footer" onSubmit={handleSubmit}>
    <div className="input-container">
        <label htmlFor="nom">Nom :</label>
          <input type="text" id="name" name="nom"
          value={formData.nom}
          onChange={handleChange}/>
    </div>
    <div className="input-container">
        <label htmlFor="prenom">Prénom :</label>
        <input type="text" id="name" name="prenom"value={formData.prenom}
        onChange={handleChange}/>
    </div>
    <div className="input-container">
        <label htmlFor="mail">Mail :</label>
        <input type="email" id="mail" name="email"value={formData.mail}
        onChange={handleChange}  pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        required
        onInvalid={(e) => {
          e.target.setCustomValidity("Entrez une adresse mail correcte");
        }}
        onInput={(e) => {
          e.target.setCustomValidity("");
        }}/>
    </div>
    <div className="input-container">
    <label htmlFor="demande">Demande :</label>
        <textarea
          id="demande" name="demande" value={formData.demande}
          onChange={handleChange}
          ></textarea>
      </div>
        <input type="submit" value="Envoyer" disabled={!isFormValid()}/>
        </form>

        <div className="rs-container">
          <a href="https://www.instagram.com/varo_dom/">
          <img src={logoInstagram} className="logo-rs"/>
          </a>

          <a href="https://www.facebook.com/francis.decker.9/">
          <img src={logoFacebook} className="logo-rs"/>
          </a>
        </div>
          </div>
   </footer>
  )
}

export default Footer