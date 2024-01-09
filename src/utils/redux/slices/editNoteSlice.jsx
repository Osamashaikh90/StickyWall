import { createSlice } from "@reduxjs/toolkit";

const editNoteSlice = createSlice({
name:"editNote",
initialState:{
    isModalOpen:false,
    editedNote:{
        id:'',
        title:'',
        content:'',
        color:'',
        date:''
    }
},
reducers:{
    OpenEditModal:(state,action)=>{
        state.isModalOpen = true
        state.editedNote = {...action.payload}
    },
    CloseEditedModal:(state)=>{
        state.isModalOpen = false;
        state.editedNote = {
            id:'',
            title:'',
            content:'',
            color:'',
            date:''
        }
    },
    updateEditedNote:(state,action)=>{
    state.editedNote = {...state.editedNote,...action.payload};
    
    }
}
})
export const {OpenEditModal,CloseEditedModal,updateEditedNote} = editNoteSlice.actions
export default editNoteSlice.reducer