import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollection from "../Components/NewCollection/NewCollection.jsx";
import NewLetter from "../Components/NewsLetter/NewLetter.jsx";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewLetter />
    </div>
  );
};

export default Shop;
