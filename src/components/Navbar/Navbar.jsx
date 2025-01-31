import logoo from "../../assets/logoo.png";
import { GiShoppingCart } from "react-icons/gi";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CardContext from "../../Providers/CardContext/CardContext";
import Why from "../WhyDesiDough/Why";
import ThemeContext from "../Theme/ThemeContext";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { totalQuantity } = useContext(CardContext);

  const handleWhyDesiDoughClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  const { dark } = useContext(ThemeContext);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 p-4 z-50 ${
          dark ? "bg-gray-900 text-white" : "bg-white text-black shadow-lg"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={logoo} alt="Logo" className="h-10 w-10" />
            <a href="/">
              <h1 id="logo-heading" className="text-xl font-bold">
                Desi-Dough
              </h1>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#Menu" className="hover:text-gray-400">
                Menu
              </a>
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
              <Link to="" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>

          {/* Icons Section */}
          <div className="flex items-center space-x-6">
            <button className="relative p-2">
              <Link to="/Cart">
                <GiShoppingCart className="text-3xl" />
                {totalQuantity > 0 && (
                  <span
                    className={`absolute top-0 right-0 text-xs rounded-full px-1 ${
                      dark
                        ? "bg-white text-black"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </button>

            {showPopup && (
              <Why
                message="At Desi Dough, we bring you the rich and diverse flavors of traditional Indian cuisine, 
                carefully crafted to deliver an authentic culinary experience. 
                Here’s why we stand out from other food delivery services!"
                onClose={() => setShowPopup(false)}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
