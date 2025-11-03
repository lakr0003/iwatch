"use client";

import { useState } from "react";
import Image from "next/image";

import Navy from "../../../public/navy.png";
import Mint from "../../../public/mint.png";
import Ocean from "../../../public/ocean.png";

import Dot from "./Dot";
import ColorOptions from "./ColorOptions";

const Hero = () => {
  const [isSelect, setIsSelect] = useState(Navy);

  return (
    <section className="hero">
      <div className="text-content">
        <h1>The Perfect Moment</h1>
        <h2>Between Past And Future.</h2>
        <button className="buy-btn">Buy Now</button>
      </div>
      <div className="watch-image">
        <Image src={isSelect} alt="iWatch" width={500} height={500} />

        <div className="color-dots">
          <Dot color="navy" select={() => setIsSelect(Navy)} clicked={isSelect === Navy ? "clicked" : ""} />
          <Dot color="mint" select={() => setIsSelect(Mint)} clicked={isSelect === Mint ? "clicked" : ""} />
          <Dot color="ocean" select={() => setIsSelect(Ocean)} clicked={isSelect === Ocean ? "clicked" : ""} />
        </div>

        <div className="color-options">
          <ColorOptions src={Navy} color="optionnavy" onClick={() => setIsSelect(Navy)} />
          <ColorOptions src={Mint} color="optionMint" onClick={() => setIsSelect(Mint)} />
          <ColorOptions src={Ocean} color="optionOcean" onClick={() => setIsSelect(Ocean)} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
