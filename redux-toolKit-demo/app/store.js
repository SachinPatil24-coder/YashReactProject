const configureStore=require("@reduxjs/toolkit").configureStore;
const cakeReducer=require("../feacture/Cake/cakeSlice")


const store=configureStore({
    reducer:{
        cske:cakeReducer,
    }
})

module.exports=store;