import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handlechange = () => {
    setClick(!click);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-cointainer">
          <Link to="/" className="nav-logo">
            SKVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handlechange}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
