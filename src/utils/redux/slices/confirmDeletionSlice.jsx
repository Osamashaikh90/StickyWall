import { createSlice } from "@reduxjs/toolkit";

const confirmDeletionSlice = createSlice({
name:"confirmDelete",
initialState:{
isOpen:false,
},
reducers:{
openConfirmDelete:(state)=>{
state.isOpen=true;
},
closeConfirmDelete:(state)=>{
state.isOpen=false;
}
},

})

export const {openConfirmDelete,closeConfirmDelete} = confirmDeletionSlice.actions;
export default confirmDeletionSlice.reducer;