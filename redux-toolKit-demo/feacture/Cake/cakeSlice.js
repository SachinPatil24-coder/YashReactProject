const createSlice=require("@reduxjs/toolkit").createSlice;

const initialState={
    numerOfCake:10,
}

const cakeSlice=createSlice({
    name:"cake",
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numerOfCake--;
        },
        restoked:(state,action)=>{
            state.numerOfCake += action.payload;
        }
    }
});

module.exports =cakeSlice.reducer;
module.exports.cakeActions =cakeSlice.actions;


