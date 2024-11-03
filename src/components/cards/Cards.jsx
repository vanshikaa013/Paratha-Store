import { useContext } from "react";
import CardContext from "../../Providers/CardContext/CardContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import ThemeContext from "../Theme/ThemeContext";
// import { ThemeContext } from "../Theme/ThemeContext";

const Cards = ({ card }) => {
  const { addToCart } = useContext(CardContext);
  const {dark} = useContext(ThemeContext)

  const handleCart = () => {
    addToCart(card);
  };

  return (
    <div
      className={`card p-1 flex flex-col items-center justify-center rounded-lg w-[25%] ${
        dark ? "bg-white text-black" : "bg-green-700 text-white"
      }`}
    >
      <div
        className="image h-40 w-full bg-cover bg-center rounded-t-lg mb-4"
        style={{ backgroundImage: `url(${card.image})` }}
      ></div>
      <h1 className="font-semibold mb-3 text-xl">{card.name}</h1>
      <span className="text-center">
        <h3>Price : ₹{card.price}</h3>
        <h3>{card.addOns}</h3>
      </span>
      <button
        className={`w-30 outline font-semibold p-1 rounded-md my-4 ${
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
