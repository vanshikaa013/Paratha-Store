import React, { useContext, useEffect, useState } from "react";
import CardContext from "../Providers/CardContext/CardContext";
import emptyCart from "../assets/emptyCart.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { toast } from "react-toastify";
import ThemeContext from "./Theme/ThemeContext";
import "aos/dist/aos.css";

const CartItems = () => {
  const { cart, removeCart, updateQuantity } = useContext(CardContext);
  const total = cart.reduce((p, c) => p + c.price * c.quantity, 0);

  const [price, setPrice] = useState("0");
  const [extra, setExtra] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});
  const [isPopupVisible, setPopupVisible] = useState(false); 

  const handleRemove = (cardId) => {
    if (checkedItems[cardId]) {
      setExtra((prevExtra) => prevExtra - 10);
      setCheckedItems((prev) => {
        const updated = { ...prev };
        delete updated[cardId];
        return updated;
      });
    }
    removeCart(cardId);
  };

  const handleQuantityChange = (cardId, action) => {
    updateQuantity(cardId, action === "increment" ? 1 : -1);
  };

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCheckboxChange = (cardId, isChecked) => {
    setCheckedItems((prev) => ({ ...prev, [cardId]: isChecked }));
    setExtra((prevExtra) => prevExtra + (isChecked ? 10 : -10));
  };

  const handleConfirm = () => {
    if(cart.length > 0){
      setPopupVisible(true); 
    }else{
      toast.error(" Your Cart Is Empty", {
        position:"top-left",
        draggable: true,
      })
      // console.log(vas)
    }
  };

  const closePopup = () => {
    setPopupVisible(false); 
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once:true });
  }, []);
  
  const { dark} = useContext(ThemeContext)
  return (
    <div className={dark ? "flex justify-center items-center bg-black" : "flex justify-center items-center bg-white"}>
  <div className={dark ? "container w-[95%] shadow-xl mt-20 pt-10 bg-blue-950 text-white" : "container w-[95%] shadow-xl mt-20 pt-10"}>
    <div className="cartItems flex flex-col md:flex-row w-full">
      {/* Cart Section */}
      <div className="cart px-5 w-full md:w-[70%]">
  <h1 className="text-3xl font-bold">Shopping Cart</h1>
  <hr className="mt-10" />
  <li className="px-3 pt-10 flex flex-wrap justify-between text-sm">
    <h4 className="font-bold text-gray-500 text-md mr-[12%]">PRODUCT DETAILS</h4>
    <h4 className="font-bold text-gray-400 text-md">EXTRA</h4>
    <h4 className="font-bold text-gray-400 text-md">QUANTITY</h4>
    <h4 className="font-bold text-gray-400 text-md">PRICE</h4>
    <h4 className="font-bold text-gray-400 text-md">TOTAL</h4>
  </li>

  {cart.length === 0 ? (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mt-8 mb-2">Your Cart Is Empty</h2>
      <img className="w-[30%] sm:w-[50%] md:w-[30%]" src={emptyCart} alt="Empty Cart" />
    </div>
  ) : (
    <div className="py-10">
      <ul>
        {cart.map((card) => (
          <li key={card.id}>
            <div
              data-aos="fade-right"
              className={dark ? "bg-blue-950 transition ease-in-out duration-300 text-white flex items-center justify-between py-5 px-2 hover:bg-indigo-700" : "bg-white transition ease-in-out duration-300 text-black flex items-center justify-between py-5 px-2 hover:bg-green-600"}
            >
              <span className="flex flex-wrap gap-5 w-full md:w-auto">
                <img className="w-40" src={card.image} alt="" />
                <span className="flex flex-col justify-between items-start w-[40%]">
                  <h3 className="text-md font-semibold">{card.name}</h3>
                  <button
                    className={dark ? "p-2 text-sm hover:text-blue-950" : "p-2 text-sm hover:text-white"}
                    onClick={() => handleRemove(card.id)}
                  >
                    REMOVE
                  </button>
                </span>
              </span>

              <div className="checkbox w-full sm:w-[40%] md:w-[15%]">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={checkedItems[card.id] || false}
                  onChange={(e) => handleCheckboxChange(card.id, e.target.checked)}
                />
                <label className="text-sm" htmlFor="checkbox">{card.addOns}</label>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-[40%] md:w-auto">
                <button
                  className={dark ? "px-2 py-1 bg-gray-200 text-blue-900 text-xl" : "px-2 py-1 bg-gray-200 text-xl"}
                  onClick={() => handleQuantityChange(card.id, "decrement")}
                  disabled={card.quantity === 1}
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-semibold">{card.quantity}</span>
                <button
                  className={dark ? "px-2 py-1 bg-gray-200 text-blue-950 text-xl" : "px-2 py-1 bg-gray-200 text-xl"}
                  onClick={() => handleQuantityChange(card.id, "increment")}
                >
                  <FaPlus />
                </button>
              </div>

              <p className="text-lg font-semibold">Price: ₹{card.price}</p>
              <h3 className="text-lg font-semibold">Total: ₹{card.price * card.quantity}</h3>
            </div>
          </li>
        ))}
      </ul>

      <a href="/">
  <span className="flex justify-between mt-7 items-center md:w-[17%]">
    <FaLongArrowAltLeft className="text-xl md:text-2xl" />
    <span className="text-sm md:text-lg">Continue Shopping</span>
  </span>
</a>

    </div>
  )}
</div>


      {/* Order Overview Section */}
      <div
  data-aos="fade-left"
  className="bill w-full md:w-[30%] px-5 md:px-10 sticky top-[30%] right-5 md:static md:top-auto md:right-auto"
>
  <h1 className="text-3xl font-bold">Order Overview</h1>
  <hr className="mt-10" />
  <span className="flex justify-between">
    <h2 className="font-semibold pt-10">ITEMS {cart.length}</h2>
    <h2 className="font-semibold pt-10">₹{total}</h2>
  </span>
  <div className="py-5">
    <label className="font-semibold mb-3 inline-block text-sm uppercase">Shipping</label>
    {cart.length === 0 ? (
      <select className="block p-2 text-gray-600 w-full text-sm">
        <option value="">Your Cart is Empty</option>
      </select>
    ) : (
      <select value={price} onChange={handleChange} className="block p-2 text-gray-600 w-full text-sm">
        <option value={0}>
          Upto 5 km - <span className="text-green-500">Free</span>
        </option>
        <option value={15}>Range 5-8 km - ₹15.00</option>
        <option value={25}>Range 9-15 km - ₹25.00</option>
        <option value={40}>Range Above 15 km - ₹40.00</option>
      </select>
    )}
  </div>

  <span className="flex justify-between py-5 font-semibold">
    <h1>Shipping:</h1>
    <h2>₹{price}</h2>
  </span>

  <span className="flex justify-between py-5 font-semibold">
    <h1>Extras:</h1>
    <h2>₹{extra}</h2>
  </span>

  <span className="flex justify-between py-5 font-semibold">
    <h1>TOTAL COST :</h1>
    <h1>₹{total + parseFloat(price) + extra}</h1>
  </span>

  <button
    className={dark
      ? "bg-blue-600 py-3 px-2 text-white font-medium my-3 w-full hover:bg-blue-300 hover:text-black"
      : "bg-green-600 py-3 px-2 text-white font-medium my-3 w-full hover:bg-green-300 hover:text-green-900"
    }
    onClick={handleConfirm}
  >
    CONFIRM
  </button>
</div>

    </div>
  </div>

  {/* Popup for order confirmation */}
  {isPopupVisible && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Order Confirmed!</h2>
        <p className="mt-2">Thank you for your order. We will process it shortly.</p>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-300 hover:text-black"
          onClick={closePopup}
        >
          OKAY
        </button>
      </div>
    </div>
  )}
</div>
  );
};

export default CartItems;
