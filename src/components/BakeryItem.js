import { useState } from "react";
import "./BakeryItem.css";

const BakeryItem = (props) => {
    const item = props.item;
    const cart = props.cart;
    const setCart = props.setCart;
    const price = props.price;
    const setPrice = props.setPrice;

    const handleAdd = () => {
        setCart([...cart, item]);
        setPrice(price + item.price);
    }

    return (
        <div className="BakeryItem">
            <div>
                <img src={item.image}></img>
            </div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
            <button onClick={handleAdd}>Add To Cart</button>
        </div>
    );
};

export default BakeryItem;