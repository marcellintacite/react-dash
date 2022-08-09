import React, { useState } from "react";
import "font-awesome/css/font-awesome.css";
import "./navbar.css";
import d from "../img/bg6.jpg";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div className="navbar">
      <div className="title">
        <span>
          mon<span className="enfant">entreprise</span>
        </span>
        <div className="fa fa-gg-circle"></div>
      </div>
      <div className="search">
        <input type="text" name="texte" placeholder="Chercher...." />
        <span className="fa fa-search"></span>
      </div>
      <ul className={expand && "active"} onClose={() => setExpand(false)}>
        <div className="list">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/">Produits</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </div>
      </ul>
      <div className="toggle" onClick={handleExpand}>
        <span className={expand ? "fa fa-times" : "fa fa-align-right"}></span>
      </div>
    </div>
  );
}
