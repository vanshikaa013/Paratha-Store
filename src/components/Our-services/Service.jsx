import { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import serviceParatha from "../../assets/serviceParatha.png";
import ThemeContext from "../Theme/ThemeContext";

const Service = () => {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className={`container p-5 lg:p-10 flex flex-col-reverse lg:flex-row items-center ${
        dark ? "bg-gray-950 text-white" : ""
      }`}
    >
      {/* Image Section */}
      <div
        className="w-full lg:w-[50%] flex items-center justify-center py-6 lg:py-10"
        data-aos="fade-up"
      >
        <img
          className="w-[70%] md:w-[60%] lg:w-[80%] max-w-full"
          src={serviceParatha}
          alt="Delicious Paratha"
        />
      </div>

      {/* Text Section */}
      <div
        className="w-full lg:w-[50%] px-5 lg:px-10 py-4 lg:py-0 text-center lg:text-left"
        data-aos="fade-up"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 lg:my-10">
          Our Services
        </h1>
        <p className="my-4 text-base md:text-lg">
          Welcome to Desi Dough, where every paratha tells a story of tradition
          and taste! 
        </p>
        <p className="my-4 text-base md:text-lg">
          We take pride in handcrafting our parathas, using only the freshest
          ingredients and time-honored recipes that have been passed down
          through generations!
        </p>
        <ul className="list-disc text-sm md:text-md my-4 mx-6 lg:mx-0">
          <li>Fast Delivery</li>
          <li>Eco-friendly Packaging</li>
          <li>Best Taste</li>
        </ul>
        <button
          className={`mt-4 px-4 py-2 rounded-3xl text-white ${
            dark
              ? "bg-green-600 hover:bg-green-500"
              : "bg-amber-600 hover:bg-yellow-500"
          }`}
        >
          <a href="#Menu">Order Now</a>
        </button>
      </div>
    </div>
  );
};

export default Service;
