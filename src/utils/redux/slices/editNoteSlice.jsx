import { createSlice } from "@reduxjs/toolkit";
const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
const editNoteSlice = createSlice({
name:"editNote",
initialState:{
    isEditModalOpen:false,
    noteList: storedNotes,
},
reducers:{
    OpenEditModal:(state,action)=>{
        state.isEditModalOpen = true
        state.editedNote = {...action.payload}
    },
    CloseEditedModal:(state)=>{
        state.isEditModalOpen = false;
    },
    editNote:(state,action)=>{
        const {noteid,title,content} = action.payload
        console.log(title,content)
        const editednote = state.noteList.map((note)=>{
            // console.log(note.title,note.content)
            if(note.id === noteid){
                return { ...note, title, content };
            }
            return note
            // console.log(note.title,note.content)
        })

        state.noteList = editednote
    localStorage.setItem("notes", JSON.stringify(state.noteList));
    }
}
})
export const {OpenEditModal,CloseEditedModal,editNote} = editNoteSlice.actions
export default editNoteSlice.reducer