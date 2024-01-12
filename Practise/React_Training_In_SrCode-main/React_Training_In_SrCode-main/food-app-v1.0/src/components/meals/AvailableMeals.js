import Card from "../ui/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "SusTender Coconut - Medium",
    description: "Finest Coconut",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Banana - Yelakki",
    description: "Fresh and sweet banana!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Pomegranate (Loose)",
    description: "Best in town",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Apple -Red Delicious",
    description: "Sweet Apple",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem id={meal.id} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
