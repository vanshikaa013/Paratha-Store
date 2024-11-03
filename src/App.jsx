import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero-sec/Hero";
import Service from "./components/Our-services/Service";
import Cardsec from "./components/cards/Cardsec";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardProvider } from "./Providers/CardContext/CardContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartItems from "./components/CartItems";
import Footer from "./components/Footer/Footer";
import Review from "./components/ReviewSec/Review";
import ThemeButton from "./components/Theme/ThemeButton";


const App = () => {
  return (
    <Router>      
      <CardProvider>
        <Navbar />
        <ToastContainer /> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Service />
                <Cardsec />
                <Review/>
                <Footer/>
              </>
            }
          ></Route>
          <Route path="/Cart" element={<CartItems/>}>
          </Route>
        </Routes>
        <ThemeButton/>

      </CardProvider>
    </Router>
  );
};

export default App;
