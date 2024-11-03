import { RiShoppingCartLine } from "react-icons/ri";
import logoo from "../../assets/logoo.png";
import { FaRegUser } from "react-icons/fa";
// import CartItems from "../CartItems";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CardContext from "../../Providers/CardContext/CardContext";
import Why from "../WhyDesiDough/Why";
import ThemeContext from "../Theme/ThemeContext";
const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const { totalQuantity } = useContext(CardContext);

  const handleWhyDesiDoughClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  const {dark} = useContext(ThemeContext)

  return (
    <>
      <nav
        id="navbar"
        className={
          dark
            ? "fixed top-0 left-0 right-0 bg-gray-900 text-white p-4  z-50"
            : "fixed top-0 left-0 right-0 bg-white text-black p-4 shadow-lg z-50"
        }
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logoo} alt="Logo" className="h-10 w-10" />
            <a href="/">
              <h1 id="logo-heading" className="text-xl font-bold ">
                Desi-Dough
              </h1>
            </a>
          </div>

          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-400"
                onClick={handleWhyDesiDoughClick}
              >
                Why Desi-Dough?
              </Link>
            </li>
            <li>
              <a href="#Menu" className="hover:text-gray-400">
                Menu
              </a>
            </li>
            <li>
              <Link to="" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-6">
            {/* <button
              onClick={toggleSearch}
              className=" flex flex-col justify-center items-center ">
              <span classNameName="flex">
                <FaSearch />
              </span>
              <h5>Search</h5>
            </button> */}
            <button className=" p-2 rounded-md flex flex-col justify-center items-center  ">
              <Link to="/Cart">
                <RiShoppingCartLine className="text-xl" />
                <h5>
                  {totalQuantity > 0 && (
                    <span className="absolute top-6 right-20 bg-green-600 text-white text-xs rounded-full px-1">
                      {totalQuantity}
                    </span>
                  )}
                  Cart
                </h5>
              </Link>
            </button>
            <button className=" p-2 rounded-md flex flex-col justify-center items-center ">
              <FaRegUser className="text-lg" />
              <h5>User</h5>
            </button>

           

            {showPopup && (
              <Why
                message="At Desi Dough, we bring you the rich and diverse flavors of traditional Indian cuisine, 
                carefully crafted to deliver an authentic culinary experience. 
                Here’s why we stand out from other food delivery services!"
                onClose={() => setShowPopup(false)} // Allow manual closing
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
