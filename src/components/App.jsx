import { useState } from "react";
import Navbar from "./Navbar";
import PokeLists from "./PokeLists";
import "./app.css";
export default function App() {
  return (
    <div className="container">
      <Navbar />
      <PokeLists />
    </div>
  );
}
