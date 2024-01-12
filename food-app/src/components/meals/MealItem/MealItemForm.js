import React, { useRef } from 'react'
import Input from '../../ui/Input'
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {

    const amountRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enterdeAmount = amountRef.current.value;
        const eneteredAmountNumber = +enterdeAmount;
        console.log(amountRef.current.value);

        props.onAddTOCart(eneteredAmountNumber)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount"
                ref={amountRef}
                input={
                    {
                        id: "amount" + props.id,
                        type: "number",
                        min: 1,
                        max: 5,
                        steps: 1,
                        defaultValue: 1,
                    }
                } />
            <button className={classes.button}>+Add</button>
        </form>
    )
}

export default MealItemForm;
