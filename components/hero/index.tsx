import React from "react";
import Header from "./header";
import HeroBody from "./hero-body";

function Hero() {
  return (
    <section className=" min-h-screen max-[890px]:gap-[100px] flex flex-col pt-10 app-container hero-bg">
      <Header />
      <HeroBody />
    </section>
  );
}

export default Hero;
