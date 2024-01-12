import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>Meal Item Name</h3>
        <div className={classes.description}>Meal Item Description</div>
        <div className={classes.price}>Price of Meal</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
