/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloseEditedModal, editNote } from '../utils/redux/slices/editNoteSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditModal = ({noteToEdit}) => {
  const dispatch = useDispatch();
  const noteList = useSelector((store) => store.editNote.noteList);

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')

  useEffect(()=>{
    if (noteToEdit) {
      const note = noteList?.find((note) => note.id === noteToEdit);
      if (note) {
        setTitle(note.title || '');
        setContent(note.content || '');
      }
    }
  },[noteToEdit,noteList])

  const HandleOnSubmit = (e)=>{
    let payload = {
      title:title,
      content:content,
      noteid:noteToEdit
    }
    console.log("Payload:", payload); 
    e.preventDefault()
    dispatch(editNote(payload))
    dispatch(CloseEditedModal())
    toast("Note Updated Successfully...")
  } 

  return (
    <>
     
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
        <div className='p-4 bg-white rounded-lg min-h-96 min-w-96 max-w-[600px]'>
          <h1 className="mb-4 text-2xl font-semibold">Edit Note</h1>
          <form onSubmit={HandleOnSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Content:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
                rows="4"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Update Note
              </button>
            </div>
            <p className='mt-2'>PS: Reload Once to reflect changes after submission.</p>
          </form>
          </div>
        </div>
      
    </>
  );
};

export default EditModal;
