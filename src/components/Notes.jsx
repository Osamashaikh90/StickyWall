// import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch,useSelector } from "react-redux";
import { openModal } from "../utils/redux/slices/previewNoteSlice";
import PreviewModal from "./PreviewModal";
import EditModal from "./EditModal";
import { OpenEditModal } from "../utils/redux/slices/editNoteSlice";
import { openConfirmDelete } from "../utils/redux/slices/confirmDeletionSlice";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notes = () => {
  const [noteToDelete,setNoteToDelete] = useState(null);
  const [noteToEdit,setNoteToEdit] = useState(null)
const dispatch = useDispatch();

const handleOpenModal = (note) => {
  dispatch(openModal(note));
};

const handleDeleteNote = (noteId)=>{
  setNoteToDelete(noteId);
dispatch(openConfirmDelete(noteId))

}

const HandleEditModal = (noteID)=>{
  setNoteToEdit(noteID)
  dispatch(OpenEditModal())
}
const isEditOpen = useSelector((store)=>store.editNote.isEditModalOpen)

// const filteredNotes = useSelector((store)=>store.addNote.filteredNotes)
const noteList = useSelector((store)=>store.addNote.noteList);

const truncateContent = (text, maxLength) => {
  if (!text || typeof text !== "string") {
    return "";
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};
// console.log("noteList:", noteList);


  // to generate class names for title based on selcted style in AddNote
  const getTitleClassNames = (note) => {
    let classNames = 'text-lg font-semibold';

    if (note.isBold && note.isItalic) {
      classNames += ' font-bold italic';
    } else if (note.isBold) {
      classNames += ' font-bold';
    } else if (note.isItalic) {
      classNames += ' italic';
    }

    return classNames;
  };
  if(noteList<=0){
    return(
      <>
        <div className="flex flex-col items-center justify-center m-40 text-lg font-semibold text-gray-600">
      <p className="">
        &quot;The journey of a thousand notes begins with a single keystroke.&quot;
        
      </p>
      <p>Start creating your notes and let inspiration flow!</p>
    </div>
      </>)
  }else{
  
return (
    <div className="grid gap-5 p-5 laptop:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2">
      {noteList?.map((note, index) => {
        return (
          <>
            <div
              key={index}
              style={{backgroundColor:note.color}}
              className={`relative p-2  overflow-hidden  border rounded shadow-lg note-box rounded-tr-[25px] h-52`}
            >
              <h1 className={`${getTitleClassNames(note)} h-[10%] my-1`}>{note.title}</h1>
              <p className="h-[70%]">
               {truncateContent(note.content,140)}
              </p>
              <div className="flex items-center justify-between gap-4 py-1">
                <div className="flex items-center gap-3">
                <button onClick={()=>handleOpenModal(note)}><FaEye /></button>
                <button onClick={()=>handleDeleteNote(note.id)}>
                    <MdDelete  className="text-red-500"/>
                </button>
                <button onClick={()=>HandleEditModal(note.id)}><AiOutlineEdit className="text-green-800"/></button></div>
                <div>{note.date}</div>
              </div>
              <PreviewModal />
              {isEditOpen && <EditModal noteToEdit={noteToEdit}/>}
              <DeleteConfirmationModal noteToDelete = {noteToDelete}/>
            </div>
          </>
        );
      })}
      <ToastContainer />
    </div>
  );
}
};

export default Notes;
