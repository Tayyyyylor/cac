import "./Navbar.css";
import 'intersection-observer';
import { useState, useEffect } from "react";


function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Ajouter un écouteur d'événement pour l'événement resize
    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const handleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

 

 

  return (
    <>
      {isMobile ? (
        <nav className={`nav-mobile ${menuIsOpen ? "active" : "" }`}>
          <button  className="navbar-link margin-top delay-1" >
            <a className="link-nav" href="#id-verbal">
            verbal
            </a>
          </button>
          <button  className="navbar-link margin-top delay-2" >
         
          <a className="link-nav" href="#id-non-verbal">
           non-verbal
        </a>

          </button>
          <button className="navbar-link margin-top delay-3" >
            <a className="link-nav" href="#id-ecrit">

          écrit
            </a>
          
    
          </button>
          <button className="navbar-link  delay-4">
            <a className="link-nav" href="#id-services">

            services
            </a>
          </button>
          <button className="navbar-link  delay-5">
            <a className="link-nav" href="#id-temoignages">

            témoignages
            </a>
          </button>
          <button className="navbar-link  delay-6">
          <a className="link-nav" href="#id-temoignages">
            contact
            </a>
          </button>
        </nav>
      ) : (
        <nav className="nav-desktop">
          <div className="navbar-link  delay-1">
            <a className="link-nav" href="#id-verbal">
            verbal
            </a>
          </div>
          <div className="navbar-link  delay-2">
          <a className="link-nav" href="#id-non-verbal">
           non-verbal
           </a>
          </div>
          <div className="navbar-link  delay-3">
          <a className="link-nav" href="#id-ecrit">
           écrit 
           </a>
          </div>
          <div className="navbar-link  delay-4">
          <a className="link-nav" href="#id-services">
            services
            </a>
          </div>
          <div className="navbar-link  delay-5">
          <a className="link-nav" href="#id-temoignages">
            témoignages
            </a>
          </div>
          <div className="navbar-link delay-6">
            <a className="link-nav" href="#id-contact">
            contact
            </a>
          </div>
        </nav>
      )}

      {isMobile ? (
        <button
          onClick={handleMenuIsOpen}
          type="button"
          aria-label="toggle curtain navigation"
          className="nav-toggler"
        >
          <span
            className={` line l1 ${menuIsOpen ? "active" : "line"}`}
          ></span>
          <span
            className={`line l2 ${menuIsOpen ? "active" : "line"}`}
          ></span>
          <span
            className={` line l3 ${menuIsOpen ? "active" : "line"}`}></span>
        </button>
      ) : (
        <button
          onClick={handleMenuIsOpen}
          type="button"
          aria-label="toggle curtain navigation"
          className="nav-toggler"
        >
          <span
            className={` line l1 ${menuIsOpen ? "active" : "line"}`}
          ></span>
          <span
            className={`line l2 ${menuIsOpen ? "active" : "line"}`}
          ></span>
          <span
            className={` line l3 ${menuIsOpen ? "active" : "line"}`}
          ></span>
        </button>
      )}
    </>
  );
}

export default Navbar;
