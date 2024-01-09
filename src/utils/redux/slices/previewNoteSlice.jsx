import { createSlice } from "@reduxjs/toolkit"

const previewNoteSlice = createSlice({
name:"previewNote",
initialState:{
isModalOpen:false,
selectedNote:null,
},
reducers:{
openModal:(state,action)=>{
state.isModalOpen = true;
state.selectedNote = action.payload;
},
closeModal:(state)=>{
state.isModalOpen=false,
state.selectedNote = null;
}

}
})
export const { openModal, closeModal } = previewNoteSlice.actions;
export default previewNoteSlice.reducer
