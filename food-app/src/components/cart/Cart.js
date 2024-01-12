import React, { useContext } from 'react'
import Modal from '../ui/Modal';
import classes from "./Cart.module.css";
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';


const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0
    const cartItemRemoveHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }
    const cartItemAddHandler = (id) => {
        cartCtx.removeItem(id);
    }
    const cartItems = (

        <ul className={classes["cart-items"]}>{
            cartCtx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                )
            })
        }
        </ul>
    )
    return (
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
                <span>120</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={classes.button} >Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
