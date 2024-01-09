import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloseEditedModal, updateEditedNote } from '../utils/redux/slices/editNoteSlice';

const EditModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((store) => store.editNote.isModalOpen);
  const editedNote = useSelector((store) => store.editNote.editedNote);

  // console.log('Edit Modal Component Rendered');
  
  const [updatedTitle, setUpdatedTitle] = useState(editedNote?.title || '');
  const [updatedContent, setUpdatedContent] = useState(editedNote?.content || '');

  useEffect(() => {
    setUpdatedTitle(editedNote?.title || '');
    setUpdatedContent(editedNote?.content || '');
  }, [editedNote]);

// console.log("editednote:",editedNote);
  const handleUpdateNote = () => {
    dispatch(updateEditedNote({ title: updatedTitle, content: updatedContent }));
   
    // console.log(updatedTitle);
    dispatch(CloseEditedModal());
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
        <div className='p-4 bg-white rounded-lg min-h-96 min-w-96 max-w-[600px]'>
          <h1 className="mb-4 text-2xl font-semibold">Edit Note</h1>
          <form onSubmit={handleUpdateNote}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Title:</label>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Content:</label>
              <textarea
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
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
          </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
