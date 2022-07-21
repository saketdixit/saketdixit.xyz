import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";
import particleConfig from "../config/particleConfig";

function Particle() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      className="hidden md:block"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleConfig}
    />
  );
}

export default Particle;
