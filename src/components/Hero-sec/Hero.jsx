import { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImage from "../../assets/heroimage1.png";
import ThemeContext from "../Theme/ThemeContext";

const Hero = () => {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      id="hero"
      className={`py-10 mt-20 px-5 lg:px-10 flex flex-col lg:flex-row items-center ${
        dark ? "bg-blue-950" : "bg-white"
      }`}
    >
      {/* Text Section */}
      <div
        className="w-full lg:w-2/3 px-5 mb-8 lg:mb-0"
        data-aos="fade-right"
      >
        <h1
          className={`text-4xl lg:text-5xl font-semibold leading-tight ${
            dark ? "text-white" : "text-gray-900"
          } py-4 lg:py-8`}
        >
          "Layers of Flavor,<br /> Crafted with{" "}
          <span
            className={`text-5xl lg:text-6xl font-bold ${
              dark ? "text-[#69e271]" : "text-green-600"
            }`}
          >
            Desi-Dough
          </span>"
        </h1>
        <p
          className={`py-4 text-base lg:text-lg ${
            dark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Welcome to Desi Dough, where tradition meets flavor in every bite! Our
          paratha store celebrates the art of crafting authentic, delicious
          parathas that transport you straight to the heart of homemade,
          comforting meals.
        </p>
        <p
          className={`pb-4 text-base lg:text-lg ${
            dark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Each paratha is carefully prepared with fresh, high-quality
          ingredients and a variety of mouth-watering fillings, from classic
          aloo and paneer to exciting fusion flavors.
        </p>
        <button
          className={`rounded-3xl px-6 py-2 text-white transition-all ${
            dark
              ? "bg-green-500 hover:bg-green-400"
              : "bg-yellow-600 hover:bg-yellow-400"
          }`}
        >
          <a href="#Menu">Order Now</a>
        </button>
      </div>

      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center items-center overflow-hidden"
        data-aos="fade-left"
      >
        <img
          className="w-[80%] lg:w-[90%] transform"
          id="rotate"
          src={HeroImage}
          alt="Hero Paratha"
        />
      </div>
    </div>
  );
};

export default Hero;
