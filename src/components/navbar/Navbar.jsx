import "./Navbar.css";
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
          <div  className="navbar-link margin-top" >
            verbal
          </div>
          <div  className="navbar-link margin-top" >
         

           non-verbal
 

          </div>
          <button className="navbar-link margin-top" >
          écrit
    
          </button>
          <div className="navbar-link">
            services
          </div>
          <div className="navbar-link">
            témoignages
          </div>
          <div className="navbar-link">
            contact
          </div>
        </nav>
      ) : (
        <nav className="nav-desktop">
          <div className="navbar-link">
            verbal
          </div>
          <div className="navbar-link">
           non-verbal
          </div>
          <div className="navbar-link">
           écrit 
          </div>
          <div className="navbar-link">
            services
          </div>
          <div className="navbar-link">
            témoignages
          </div>
          <div className="navbar-link">
            contact
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
