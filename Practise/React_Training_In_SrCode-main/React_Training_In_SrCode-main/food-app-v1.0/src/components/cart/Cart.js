import React from "react";
import Modal from "../ui/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
const cartItems = (
  <ul className={classes["cart-items"]}>
    {[{ id: "c1", name: "banana", amount: 2, price: 12.99 }].map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
      />
    ))}
  </ul>
);
const Cart = (props) => {
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
