const { createSlice } = require("@reduxjs/toolkit");
const cat='electronics';
const categorySlice=createSlice({
      name:'category',
      initialState:{
        categoryItem:cat,
      },
      reducers:{
        setCategory:(state,action)=>{
            state.categoryItem=action.payload;
        }
      }
})

export const{setCategory}=categorySlice.actions;
export default categorySlice.reducer;