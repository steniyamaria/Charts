import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaEllipsisH} from "react-icons/fa";
import "./First.css";

const First = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">🔵 YOUR LOGO</div>
        <nav>
          <ul className="menu">
            <li><a href="#">COLLECTION</a></li>
            <hr/>
            <li><a href="#">NEW BRAND</a></li>
            <li><a href="#">POPULAR</a></li>
            <li><a href="#">SALE</a></li>
          </ul><br></br>
          <hr />
          <ul className="menu">
            <li><a href="#">MAN</a></li>
            <li><a href="#">WOMAN</a></li>
            <li><a href="#">KIDS</a></li>
            <li><a href="#">OTHER</a></li>
          </ul>
        </nav>
        <div className="settings"><span className="gear-icon">⚙️</span></div>
      </div>
      <div className="topbar">
        <div className="search-bar-container">
          <input type="text" className="search-bar"  />
          <FaSearch className="search-icon" />
        </div>
        <div className="icons">
          <FaShoppingCart className="icon" />
          <FaUser className="icon" />
          <FaEllipsisH className="icon" />
        </div>
      </div>

      <div className="main-content">
      <div className="text-content">
        <h1>SUPER BRAND COLLECTION</h1>
        <br></br><br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          id nisi tortor. Nunc ultricies, urna quis blandit feugiat, purus
          massa.
        </p>
        <button className="shop-button">SHOP</button>
      </div>
      <div className="image-content">
        <img src="image.jpg" alt="Brand Collection" height={500} width={300}/>
      </div>
    </div>
    </>
  );
};

export default First;
