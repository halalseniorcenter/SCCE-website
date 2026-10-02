import React from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Programs from "./components/Programs.jsx";
import WhoWeServe from "./components/WhoWeServe.jsx";
import Governance from "./components/Governance.jsx";
import GetInvolved from "./components/GetInvolved.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
    <Header />
    <div className="container">
      <Home />
      <About />
      <Programs />
      <WhoWeServe />
      <Governance />
      <GetInvolved />
      <Contact />
    </div>
    </>
  );
}
