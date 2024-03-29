import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {

  const cartCtx = useContext(CartContext)
  const { meal } = props;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
        amount: amount,
          price: meal.price
    })

  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name} </h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{meal.price}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddTOCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
