import React from "react";
import Empoleon from "./assets/images/pokemon/Empoleon.png";

export default function TestImage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Test Image Load</h2>
      <img src={Empoleon} alt="Empoleon" style={{ width: "200px" }} />
    </div>
  );
}
