import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import p from "../img/bg2.jpg";
import o from "../img/bg3.jpg";
import i from "../img/bg4.jpg";
export default function Sidebar() {
  return (
    <div style={{ flex: 3 }} className="sidebar">
      <div className="content_head">
        <div className="card_header">
          <div className="avatar">
            <img src={p} alt="mon profile" />
          </div>
        </div>
        <div className="side_texte">
          <span className="nom">Aksanti Bahiga</span>
          <div className="statut">
            <div className="point"></div>
            <span className="statu">active</span>
          </div>
        </div>
        <div className="icons">
          <span className="fa fa-bell"></span>
          <span className="fa fa-briefcase "></span>
          <span className="fa fa-folder "></span>
        </div>
      </div>
      <div className="content-body">
        <div className="lists">
          <Link to="/">
            Accueil <span className="fa fa-home"></span>
          </Link>
          <Link to="/">
            Dashboard <span className="fa fa-pie-chart"></span>
          </Link>
          <Link to="/">
            Voyage <span className="fa fa-plane"></span>
          </Link>
          <Link to="/">
            Deconnexion <span className="fa fa-power-off"></span>
          </Link>
        </div>
      </div>
      <div className="content_footer">
        <div className="post">
          <div className="post_header">
            <img src={i} alt="mon texte" />
            <div className="texte">
              <h3>La vie sur terre</h3>
              <span>Mai 2022</span>
            </div>
          </div>
          <div className="post_body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim
              sit labore qui iste vitae nulla, quas id quia aspernatur?
            </p>
            <Link to="/voir">Voir plus</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
