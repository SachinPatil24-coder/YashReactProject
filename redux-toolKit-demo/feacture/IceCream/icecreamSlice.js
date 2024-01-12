const createSlice=require("@reduxjs/toolkit").createSlice;

const initialState={
    numerOfIcecreams:20,
}


const iceCreamSlice=createSlice({
    name:"icecream",
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numerOfIceCream--;
        },
        restoked:(state,action)=>{
            state.numerOfIceCream += action.payload;
        }
    }
});

module.exports =iceCreamSlice.reducer;
module.exports.IceCreamActions =iceCreamSlice.actions;


