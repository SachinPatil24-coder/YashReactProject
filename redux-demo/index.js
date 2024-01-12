const redux =require("redux");
const reduxLogger=require("redux-logger");

//console.log("from index.js");
//console.log(redux);

const createStore =redux.createStore;
const bindActionCreators=redux.bindActionCreators;
const combineReducers=redux.combineReducers;
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';

const CAKE_RESTOCKED='CAKE_RESTOKE';

const ICECREAM_ORDER=" ICECREAM_ORDER";

const ICECREAM_RESTOCKED=" ICECREAM_RESTOCKED";


function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    };
}
function restockCake(qty=1){
    return{
        type:CAKE_RESTOCKED,
        quantity:qty,
    }
}
function orderIceCream(){
    return{
        type:ICECREAM_ORDER,
        quantity:1,
    }
}
function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        quantity:qty,
    }
}
//initial state
const initialCakeState = { numberOfCakes: 10 };

const initialIcecreamState = { numberOfIceCream:20};

//reducer
const cakeReducer = (state = initialCakeState, action) => {
    //decision making
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            }
            case CAKE_RESTOCKED:
                return{
                    ...state,
                    numberOfCakes:state.numberOfCakes + action.quantity,
                }
        default:
            return state;
    }
};


const iceCreamReducer=(state = initialIcecreamState, action)=>{
    switch (action.type) {
        case ICECREAM_ORDER:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1,
            }
            case ICECREAM_RESTOCKED:
                return{
                    ...state,
                    numberOfIceCream: state.numberOfIceCream + action.quantity,
                }
        default:
            return state;
    }

}
const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer
})

const store=createStore(rootReducer,applyMiddleware(logger));
const subscribe=store.subscribe(
    ()=>{})

//console.log(store.getState())

const action=bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream} ,store.dispatch)

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// unsubscribe();
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(4))

action.orderCake();
action.orderIceCream();
action.restockIceCream(2);