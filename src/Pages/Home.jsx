import React from "react";
import Hero from "../Components/Hero/Hero";
import OnStore from "./OnStore";
import Offer from "../Components/Offers/Offer";
import NewCollection from "../Components/NewCollections/Newcollection";
import Newsletter from "../Components/NewsLetters/Newsletter";
import Tracker from "../Components/Locationstrack/Tracker";
import "./Home.css";

function Home() {
  return (
    <div className="homeMain">
      <Hero />
      <OnStore />
      <Offer />
      <NewCollection />
      <Newsletter />
      <Tracker />
    </div>
  );
}

export default Home;
