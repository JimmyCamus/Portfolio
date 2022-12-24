import Image from "next/image";
import GlowContainer from "../containers/Glow.container";
import ArrowDown from "./icons/ArrowDown";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <Image
          src={process.env.FIREBASE_PERSONAL_IMAGE || ""}
          className="rounded-full shadow-2xl w-60 h-60 lg:w-80 lg:h-80 object-cover"
          alt="personal image"
          width={"360"}
          height={"360"}
          priority={true}
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-transparent text-3xl lg:text-7xl bg-clip-text bg-gradient-to-r from-primary-gradient to-primary text-center mt-5">
            JEREMY CAMUS VARELA
          </h1>
          <h2 className="font-extrabold mt-2 text-2xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-gradient text-center">
            Desarrollador Fullstack
          </h2>
          <div className="mt-7 mb-20 lg:mt-12 lg:mb-20">
            <SocialMedia />
          </div>
          <div className="flex items-center text-center">
            <GlowContainer from="primary-gradient" to="primary">
              <ArrowDown />
            </GlowContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
