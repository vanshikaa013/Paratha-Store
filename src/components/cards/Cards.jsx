import { useContext, useEffect } from "react";
import CardContext from "../../Providers/CardContext/CardContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import ThemeContext from "../Theme/ThemeContext";
import "aos/dist/aos.css";
// import { ThemeContext } from "../Theme/ThemeContext";

const Cards = ({ card }) => {
  const { addToCart } = useContext(CardContext);
  const {dark} = useContext(ThemeContext)

  const handleCart = () => {
    addToCart(card);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
    <div data-aos="fade-up"
      className={`card p-5 flex flex-col items-center justify-center rounded-lg w-[22%] ${
        dark ? "bg-white text-black" : "bg-green-700 text-white"
      }`}
      style={{position : "relative"}}
    >

<img src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png" alt="" id="veg" style={{position : "absolute", left : "10px", width : "20px", top : "10px"}}/>

      <div
        className="image h-40 w-[80%] bg-cover bg-center mb-4"
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
