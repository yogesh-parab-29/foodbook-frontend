import Heroimage from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <img src={Heroimage} className="w-full max-h-[600px] object-cover"></img>
    </div>
  );
};

export default Hero;
