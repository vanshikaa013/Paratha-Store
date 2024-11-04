import React, { useContext, useEffect } from "react";
import Cards from "./Cards";
import CardContext from "../../Providers/CardContext/CardContext";
import ThemeContext from "../Theme/ThemeContext";
import "aos/dist/aos.css";

const Cardsec = () => {
  const { allCards } = useContext(CardContext);
  const {dark} = useContext(ThemeContext)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div id="Menu" className={dark ? "container bg-black text-white py-10 px-6 flex flex-col justify-center items-center": "container py-10 px-6 flex flex-col justify-center items-center"} >
        <h1 className="text-5xl font-bold m " data-aos="fade-up-right">Menu</h1>
        <p className="text-sm w-[30%] text-center my-5 text-gray-600 font-semibold" data-aos="fade-up-right">
          "Bringing you the authentic taste of hand-rolled parathas, packed with
          fresh flavors and love. Dive into our menu and find your perfect
          bite!"
        </p>
        <div className="container flex flex-wrap gap-10 px-17 justify-center items-center">
          {allCards.map((card) => (
            <Cards key={card.id} card={card} dark={dark} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cardsec;
