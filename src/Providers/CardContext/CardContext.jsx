import { createContext, useReducer, useState } from "react";
import CardReducer from "./CardReducer";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const initialState = {
    allCards: [
      {
        id: 1,
        price: 50 ,
        addOns : "Extra Sauce", 
        name: "Aalo Paratha",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjm5MgAOZrNdqfsyG2fcCIVbrlprY04JDyw&s",
        extra : "extra GiSaucepan",
      },
      {
        id: 2,
        price: 60,
        addOns : " Yogurt, cheese", 
        name: "Plain paratha + Yogurt",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4SmHCnKJnEgQX1wJi1GjZu2_u-T6TODDCQ&s",
      },
      {
        id: 3,
        price: 60,
        addOns : "Corn, Cabbage, Fenugreek, Cheese", 
        name: "Veg Paratha",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlHJ8k71R8JX9Rhn_WdvBRUkz9xRN37CkUg&s",
      },
      {
        id: 4,
        price: 40,
        addOns : "Extra Sauce, Yogurt, Corn", 
        name: "Double Cheese Paratha",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VmgXjMH8_VJSqnnCTj218RZkNPR-mMjh-Q&s",
      },
      {
        id: 5,
        price: 50,
        addOns : "Extra Sauce, Yogurt", 
        name: "Corn Cheese Paratha",
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2019/02/Peas-Paratha-Recipe-500x375.jpg",
      },
      {
        id: 6,
        price: 55,
        addOns :" Extra Sauce,Cheese" ,
        name: "Onion paratha",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa437HxDLNb33RJMS5Ko4XrjW6MLV37BLgOw&s",
      },
    ],
  };

  const [state, dispatch] = useReducer(CardReducer, initialState);
  const [totalQuantity, setTotalQuantity] = useState(0);


  const [cart, setCart] = useState([]);

  const addToCart = (card) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === card.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === card.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        setTotalQuantity(totalQuantity + 1);
        return [...prevCart, { ...card, quantity: 1 }];
      }
    });
  };

  const removeCart = (cardId) => {
    setCart((prevCart) => prevCart.filter(card => card.id !== cardId));
  };

  const updateQuantity = (cardId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === cardId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };
  


  return (
    <CardContext.Provider value={{ ...state, dispatch  , addToCart , cart, setCart , removeCart , updateQuantity, totalQuantity}}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
