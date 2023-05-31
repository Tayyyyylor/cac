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
            verbal
          </div>
          <div  className="navbar-link margin-top delay-2" >
         

           non-verbal
 

          </div>
          <button className="navbar-link margin-top delay-3" >
          écrit
    
          </button>
          <div className="navbar-link  delay-4">
            services
          </div>
          <div className="navbar-link  delay-5">
            témoignages
          </div>
          <div className="navbar-link  delay-6">
            contact
          </div>
        </nav>
      ) : (
        <nav className="nav-desktop">
          <div className="navbar-link  delay-1">
            verbal
          </div>
          <div className="navbar-link  delay-2">
           non-verbal
          </div>
          <div className="navbar-link  delay-3">
           écrit 
          </div>
          <div className="navbar-link  delay-4">
            services
          </div>
          <div className="navbar-link  delay-5">
            témoignages
          </div>
          <div className="navbar-link delay-6">
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
