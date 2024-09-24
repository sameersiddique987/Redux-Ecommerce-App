import { createSlice } from "@reduxjs/toolkit";


export const cardSlice = createSlice({
    name : "card" ,
    initialState : {
        cardItems : []
    },
    reducers : {
        addCardItem : (state , action) => {
        state.cardItems.push(action.payload.item)
        } ,
        removeCardItem : (state , action) => {
     state.cardItems.splice(action.payload.item , 1)
        }
    }
})

export const { addCardItem , removeCardItem } = cardSlice.actions; 
export default cardSlice.reducer;