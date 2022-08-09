import React from "react";
import Center from "./Center";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import "./feed.css";

export default function Feed() {
  return (
    <div className="feed" style={{ display: "flex" }}>
      <Sidebar />
      <Center />
      <Rightbar />
    </div>
  );
}
