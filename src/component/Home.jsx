import React from "react";
import ButtonLoad from "./Common/ButtonLoad";
import Feed from "./Feed";
import Navbar from "./Navbar";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Feed />
    </div>
  );
}
