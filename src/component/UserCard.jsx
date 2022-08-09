import React from "react";

export default function UserCard(user) {
  let u = user.user;
  return (
    <div className="user">
      <img src={u.img} alt="" />
      <div className="text">
        <span className="nom_user">{u.nom}</span>
        <span className="post_user">{u.post}</span>
      </div>
      <div className="status">
        <div className={u.statut ? "circle active" : "circle"}></div>
      </div>
    </div>
  );
}
