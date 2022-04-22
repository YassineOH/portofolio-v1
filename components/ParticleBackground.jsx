import Particles from "react-tsparticles";
import { config } from "../lib/config/particlesjs-config";

const ParticleBackground = () => {
  return <Particles params={config} />;
};

export default ParticleBackground;
