import { createSlice } from "@reduxjs/toolkit";
// import { updateEditedNote } from "./editNoteSlice";
// import { openConfirmDelete } from "./confirmDeleteSlice";
const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
const addNoteSlice = createSlice({
  name: "addNote",
  initialState: {
    newNote: {
      id: "",
      title: "",
      content: "",
      color: "",
      date: "",
      isBold: false,
      isItalic: false,
    },
    noteList: storedNotes,
    filteredNotes: storedNotes,
    error: null,
    confirmDelete: {
      isOpen: false,
      noteIdToDelete: null,
    },
  },
  reducers: {
    updateNewNote: (state, action) => {
      state.newNote = { ...state.newNote, ...action.payload };
      //update the edited note
      // state.editedNode = {...state.editedNote, ...action.payload}
    },
    addNewNote: (state) => {
      const timestamp = Date.now(); // Get current timestamp
      const date = new Date(timestamp).toLocaleDateString();
      const newNote = {
        id: timestamp,
        title: state.newNote.title,
        content: state.newNote.content,
        color: state.newNote.color,
        date: date,
        isBold: state.newNote.isBold,
        isItalic: state.newNote.isItalic,
      };
      state.noteList.push(newNote);
      // console.log('Updated noteList:', state.noteList);
      state.newNote = {
        id: "",
        title: "",
        content: "",
        color: "",
        date: "",
        isBold: false,
        isItalic: false,
      };
      localStorage.setItem("notes", JSON.stringify(state.noteList));
    },
    deleteNote: (state, action) => {
      state.noteList = state.noteList.filter(
        (note) => note.id !== action.payload
      );
      localStorage.setItem("notes", JSON.stringify(state.noteList));
      state.confirmDelete.isOpen = false;
      state.confirmDelete.noteIdToDelete = null;
    },
    filterNote: (state, action) => {
      state.filteredNotes = state.noteList.filter((note) => {
        return note.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
  },
});
export const { updateNewNote, addNewNote, deleteNote, filterNote } =
  addNoteSlice.actions;
export default addNoteSlice.reducer;
