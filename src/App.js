import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  // }

  return (
    <div>
      <div>
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      </div>
      <div className="App">
          <div className="ItemsContainer">
            {bakeryData.map((item, index) => (
              <BakeryItem cart={cart} setCart={setCart} price={price} setPrice={setPrice} item={item}/>
            ))}
          </div>

          <div className="Cart">
            <h2>Cart</h2>
            <div>
              {cart.map((item, index) => (<p>1 x {item.name} $ {item.price}</p>))}
            </div>
            <h3>Total Price: $ {price}</h3>
          </div>
      </div>
    </div>
  );
}

export default App;
