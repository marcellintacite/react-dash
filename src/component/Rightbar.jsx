import React from "react";
import un from "../img/bg4.jpg";
import deux from "../img/bg2.jpg";
import trois from "../img/bg3.jpg";
import quatre from "../img/bg5.jpg";
import "./rightbar.css";
import UserCard from "./UserCard";
import Graph from "./Graph";
import Graphique from "./Graph";
export default function Rightbar() {
  const users = [
    {
      id: 1,
      nom: "Aksanti bahiga",
      post: "Developpeur web",
      statut: false,
      img: un,
    },
    {
      id: 2,
      nom: "Horris Mugoli",
      post: "Designer",
      statut: true,
      img: deux,
    },
    {
      id: 3,
      nom: "Alexandre juma",
      post: "Ir. reseau",
      statut: false,
      img: trois,
    },
    {
      id: 4,
      nom: "Julie ludose",
      post: "Marketing Digital",
      statut: true,
      img: quatre,
    },
  ];
  return (
    <div style={{ flex: 3 }} className="rightbar">
      <div className="content_navabr">
        <div className="user_lists">
          <h3>Travailleurs</h3>
          {users.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </div>
      </div>
    </div>
  );
}
