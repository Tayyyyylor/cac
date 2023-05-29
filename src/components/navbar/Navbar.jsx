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
           Langage verbal
          </div>
          <div  className="navbar-link margin-top" >
         

          Langage non-verbal
 

          </div>
          <button className="navbar-link margin-top" >
          Langage écrit
    
          </button>
          <div className="navbar-link margin-top" >
          Ateliers
          </div>
          <div className="navbar-link margin-top" >
          Coaching
          </div>
        </nav>
      ) : (
        <nav className="nav-desktop">
          <div className="navbar-link">
            Langage verbal
          </div>
          <div className="navbar-link">
            Langage non-verbal
          </div>
          <div className="navbar-link">
            Langage écrit 
          </div>
          <div className="navbar-link">
            Ateliers
          </div>
          <div className="navbar-link">
            Coaching
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
