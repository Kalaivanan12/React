import React from "react";
import Hero from "../components/Hero";
import { BuyConfig } from "../configs/BuyConfig";

function Buy() {
  return <Hero {...BuyConfig} />;
}

export default Buy;
