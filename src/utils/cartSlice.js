import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItem:[],
    },
    reducers:{
        setCartItem:(state,action)=>{
            state.cartItem.push(action.payload);
        },
        setDeleteItem:(state,action)=>{
            state.cartItem=state.cartItem.filter((item)=> {
                return action.payload!==item.id;
            })
           
        },
        setClearItem:(state)=>{
            state.cartItem=[];
        }
    }
})

export const {setCartItem,setDeleteItem,setClearItem}=cartSlice.actions;
export default cartSlice.reducer;