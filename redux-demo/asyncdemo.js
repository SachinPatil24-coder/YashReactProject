const redux = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
// console.log(redux);//Initial State
const initialState = { loading: false, users: [], error: "", };
//Actions Contants
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";
//Action Creators
const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    };
};
const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    };
};
const fetchUserFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    };
};//Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return { ...state, loading: true, };
        case FETCH_USERS_SUCCEEDED:
            return { ...state, loading: false, users: action.payload, error: "", };
        case FETCH_USERS_FAILED:
            return { ...state, loading: false, users: [], error: action.payload, };
        default:
            return state;
    }
};//Store
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => { console.log("Update State : ", store.getState()); });
//fetch users function
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            //users data will be available in response.data        
            const users = response.data.map((user) => user.name);
            dispatch(fetchUserSuccess(users));
        }).catch((error) => {
            //error related data will be available in error.message       
            dispatch(fetchUserFailed(error.message));
        });
    };
};//Dispatch
actionstore.dispatch(fetchUsers());