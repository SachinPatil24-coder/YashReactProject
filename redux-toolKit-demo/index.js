const store=require("./app/store")
const cakeActions=require("./feacture/Cake/cakeSlice")
console.log(store);
console.log("Initial State:",store.getState());

const unsunscribe=store.subscribe(()=>{
    console.log("updated State :",store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(2));
