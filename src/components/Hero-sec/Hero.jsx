import { useContext } from "react";
import HeroImage from "../../assets/heroimage1.png"
import ThemeContext from "../Theme/ThemeContext";
const Hero = () => {
  const {dark} = useContext(ThemeContext)
  return (
    <>
      <div className={dark ? "container py-10 mt-20 px-10 flex bg-blue-950" : "container py-10 mt-20 px-10 flex"}>
        <div className="container w-[65%] px-5">
          <h1 className={dark ? "text-5xl text-white py-8 " : "text-5xl py-8"}>"Layers of Flavor,<br /> Crafted with <span className={dark ? "text-6xl font-bold text-[#69e271]" : "text-6xl font-bold text-[green]"}>Desi-Dough</span>"</h1>
          <p className={dark ? "py-5 text-lg text-white" :"py-5 text-lg"}>
            Welcome to Desi Dough, where tradition meets flavor in every bite!
            Our paratha store celebrates the art of crafting authentic,
            delicious parathas that transport you straight to the heart of
            homemade, comforting meals.
            
          </p>
          <p className={dark ? "pb-5 text-lg text-white" :"pb-5 text-lg"}> Each paratha is carefully prepared with
            fresh, high-quality ingredients and a variety of mouth-watering
            fillings, from classic aloo and paneer to exciting fusion flavors.</p>
          <button className={dark ? "rounded-3xl bg-green-500 px-3 py-2 text-white hover:bg-green-400" : "rounded-3xl bg-yellow-600 px-3 py-2 text-white hover:bg-yellow-400"}><a href="#Menu">Order Now</a></button>
        </div>
        <div className="container w-[50%] flex justify-center items-center">
            <img className="w-[90%]" id="rotate" src={HeroImage} alt="" />
           
        </div>
      </div>
    </>
  );
};

export default Hero;
