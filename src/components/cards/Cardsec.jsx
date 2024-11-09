import React, { useContext, useEffect } from "react";
import Cards from "./Cards";
import CardContext from "../../Providers/CardContext/CardContext";
import ThemeContext from "../Theme/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Cardsec = () => {
  const { allCards } = useContext(CardContext);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="Menu"
      className={`container py-10 px-4 lg:px-6 flex flex-col items-center ${
        dark ? "bg-black text-white" : ""
      }`}
    >
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        data-aos="fade-up-right"
      >
        Menu
      </h1>
      <p
        className="text-sm md:text-base lg:text-lg w-[90%] md:w-[60%] lg:w-[30%] text-center my-5 text-gray-600 font-semibold"
        data-aos="fade-up-right"
      >
        "Bringing you the authentic taste of hand-rolled parathas, packed with
        fresh flavors and love. Dive into our menu and find your perfect bite!"
      </p>
      <div className="container flex flex-wrap gap-6 md:gap-10 lg:gap-20 justify-center items-center px-4">
        {allCards.map((card) => (
          <Cards key={card.id} card={card} dark={dark} />
        ))}
      </div>
    </div>
  );
};

export default Cardsec;
