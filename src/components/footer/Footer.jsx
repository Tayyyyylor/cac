import "./Footer.css"

function Footer() {
  return (
   <footer id="id-contact" className="footer-container">
    <h2 className="title-footer">Contact</h2>
    <form method="post" className="form-footer">
    <div>
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="name" />
    </div>
    <div>
        <label htmlFor="prénom">Prénom :</label>
        <input type="text" id="name" />
    </div>
    <div>
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="name" />
    </div>
    <div>
    <label htmlFor="demande">Demande :</label>
        <textarea
          id="demande"
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
   </footer>
  )
}

export default Footer