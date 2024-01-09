// import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../utils/redux/slices/previewNoteSlice';


const PreviewModal = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.previewNote.isModalOpen);
    const selectedNote = useSelector((state) => state.previewNote.selectedNote);
  
    const handleCloseModal = () => {
      dispatch(closeModal());
    };
    return (
        <>
          {isModalOpen && (
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
              <div className="p-4 mt-4 bg-white rounded-lg min-h-96 max-w-[600px] min-w-96">
                <h1 className="mb-4 text-2xl font-semibold">{selectedNote.title}</h1>
                <p className="text-gray-900 min-h-60">{selectedNote.content}</p>
                <button onClick={handleCloseModal} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded place-content-end">
                  Close
                </button>
              </div>
            </div>
          )}
        </>
      );
    
}

export default PreviewModal