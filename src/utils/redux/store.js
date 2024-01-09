import { configureStore } from "@reduxjs/toolkit";
import editNoteSlice from "./slices/editNoteSlice";
import addNoteSlice from "./slices/addNoteSlice";
import previewNoteSlice from "./slices/previewNoteSlice";
import confirmDeletionSlice from "./slices/confirmDeletionSlice";
const store = configureStore({
  reducer: {
    editNote:editNoteSlice,
    addNote:addNoteSlice,
    previewNote:previewNoteSlice,
    confirmDelete:confirmDeletionSlice
  },
});
export default store;
