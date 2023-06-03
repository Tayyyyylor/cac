import "./Navbar.css";
import 'intersection-observer';
import { useState } from "react";


function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const isMobile = window.innerWidth < 1024;


  const handleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

 

 

  return (
    <>
      {isMobile ? (
        <nav className={`nav-mobile ${menuIsOpen ? "active" : "" }`}>
          <div  className="navbar-link margin-top delay-1" >
            <a className="link-nav" href="#id-verbal">
            verbal
            </a>
          </div>
          <div  className="navbar-link delay-2" >
         
          <a className="link-nav" href="#id-non-verbal">
           non-verbal
        </a>

          </div>
          <div className="navbar-link delay-3" >
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
          <div className="navbar-link  delay-6">
          <a className="link-nav" href="#id-temoignages">
            contact
            </a>
          </div>
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
