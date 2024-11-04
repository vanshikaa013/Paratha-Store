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
      className={
        dark
          ? "container p-10 flex bg-gray-950 text-white"
          : "container p-10 flex"
      }
    >
      <div
        className="p-5 w-[50%] flex items-center justify-center py-10"
        data-aos="fade-up"
      >
        <img className="w-[80%]" src={serviceParatha} alt="Delicious Paratha" />
      </div>
      <div className="p-10 w-[50%]" data-aos="fade-up">
        <h1 className="text-5xl font-bold my-10">Our Services</h1>
        <p className="my-6 text-lg">
          Welcome to Desi Dough, where every paratha tells a story of tradition
          and taste! Our passion for authentic Indian cuisine shines through in
          every delicious bite.
        </p>
        <p className="my-6 text-lg">
          We take pride in handcrafting our parathas, using only the freshest
          ingredients and time-honored recipes that have been passed down
          through generations!
        </p>
        <ul className="list-disc text-md my-4">
          <li>Fast Delivery</li>
          <li>Eco-friendly Packaging</li>
          <li>Best Taste</li>
        </ul>
        <button
          className={
            dark
              ? "bg-green-600 px-4 py-2 rounded-3xl text-white hover:bg-green-500"
              : "bg-amber-600 px-4 py-2 rounded-3xl text-white hover:bg-yellow-500"
          }
        >
          <a href="#Menu">Order Now</a>
        </button>
      </div>
    </div>
  );
};

export default Service;
