import React from "react";
import Header from "../../component/header/header";
import About from "../about";
import Maunal from "../maunal";
import Rarity from "../rarity";
import RoadMap from "../roadmap";
import Team from "../team";
import "./homeStyle.css";

export const HomepageContainer = () => {
  return (
    <div className='content'>
      <Header />
      <About />
      <Maunal />
      <RoadMap />
      <Rarity />
      <Team />
    </div>
  );
};
