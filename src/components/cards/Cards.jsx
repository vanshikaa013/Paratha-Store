import { useContext, useEffect } from "react";
import CardContext from "../../Providers/CardContext/CardContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import ThemeContext from "../Theme/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = ({ card }) => {
  const { addToCart } = useContext(CardContext);
  const { dark } = useContext(ThemeContext);

  const handleCart = () => {
    addToCart(card);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`card p-5 flex flex-col items-center justify-center rounded-lg w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] my-4 ${
        dark ? "bg-white text-black" : "bg-green-700 text-white"
      }`}
      style={{ position: "relative" }}
      data-aos="fade-up"
    >
      <img
        src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png"
        alt="Vegetarian Indicator"
        id="veg"
        style={{
          position: "absolute",
          left: "10px",
          width: "20px",
          top: "10px",
        }}
      />
      <div
        className="image h-32 w-[90%] md:h-40 bg-cover bg-center mb-4 rounded-md"
        style={{ backgroundImage: `url(${card.image})` }}
      ></div>
      <h1 className="font-semibold mb-3 text-lg md:text-xl text-center">
        {card.name}
      </h1>
      <span className="text-center mb-3">
        <h3>Price : ₹{card.price}</h3>
        <h3>{card.addOns}</h3>
      </span>
      <button
        className={`w-full md:w-auto outline font-semibold px-4 py-2 rounded-md my-4 ${
          dark
            ? "border-black bg-white text-black hover:bg-black hover:text-white"
            : "border-white bg-green-950 text-white hover:text-green-600"
        }`}
        onClick={handleCart}
        aria-label="Add item to cart"
      >
        <span className="flex justify-center items-center">
          Add to Cart <MdOutlineShoppingCart className="ml-2 text-2xl" />
        </span>
      </button>
    </div>
  );
};

export default Cards;
