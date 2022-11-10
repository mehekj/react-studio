import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <div className="browse-items">
        <h1>My Bakery</h1>
        <div className="bakery-grid">
          {bakeryData.map((item, index) => (
            <BakeryItem
              item={item}
              addToCart={(item) => setCart([...cart, item])}
            />
          ))}
        </div>
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart
          .filter((item, index) => cart.indexOf(item) === index)
          .map((item) => (
            <div>
              {cart.filter((item2) => item === item2).length} {item.name}
            </div>
          ))}
        <h3>Total</h3>$
        {cart.reduce((sum, item) => (sum += item.price), 0).toFixed(2)}
      </div>
    </div>
  );
}

export default App;
