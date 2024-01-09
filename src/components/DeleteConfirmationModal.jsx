/* eslint-disable react/prop-types */
// import React from 'react'
import { useDispatch,useSelector } from "react-redux"
import { closeConfirmDelete } from "../utils/redux/slices/confirmDeletionSlice";
import { deleteNote } from "../utils/redux/slices/addNoteSlice"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DeleteConfirmationModal = ({noteToDelete}) => {
    const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.confirmDelete.isOpen);


  const handleCancel = () => {
    dispatch(closeConfirmDelete());
  };

  const handleConfirm = () => {
    dispatch(deleteNote(noteToDelete));
    dispatch(closeConfirmDelete());
    toast("Note Deleted Successfully...")
  };
  return (
    <>{isOpen && (
        <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded-md">
            <p className="mb-4 text-lg font-semibold">Are you sure you want to delete this note?</p>
            <div className="flex justify-end">
              <button
                onClick={handleCancel}
                className="px-4 py-2 mr-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DeleteConfirmationModal