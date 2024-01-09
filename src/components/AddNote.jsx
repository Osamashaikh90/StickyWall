import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateNewNote, addNewNote } from '../utils/redux/slices/addNoteSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddNote = () => {
  const dispatch = useDispatch();
  const newNote = useSelector((store) => store.addNote.newNote);
  const selectedColor = newNote.color;

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [boldClicked,setBoldClicked] = useState(false);
  const [italicClicked,setItalicClicked] = useState(false);

  const handleTitleChange = (e) => {
    dispatch(updateNewNote({ title: e.target.value, isBold, isItalic }));
  };

  const handleContentChange = (e) => {
    dispatch(updateNewNote({ content: e.target.value }));
  };

  const handleColorChange = (color) => {
    dispatch(updateNewNote({ color }));
  };

  const toggleBold = () => {
    setIsBold(!isBold);
    setBoldClicked(!boldClicked)
    dispatch(updateNewNote({ isBold: !isBold }));
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
    setItalicClicked(!italicClicked)
    dispatch(updateNewNote({ isItalic: !isItalic }));
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    dispatch(addNewNote());
    toast("New Note added Successfully...")
  };

  const colors = ['#fe9b72', '#fec971', ' #00d4fe', '#b693fd', '#e4ee91'];

  return (
    <>
      <form onSubmit={handleSaveNote} className="flex flex-col gap-4 p-3 mx-48 mt-2">
        <div className="text-2xl font-semibold ">Add New Note</div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg">Title:</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              required
              placeholder="Enter title here.."
              className={`p-1 border w-full rounded border-neutral-300 ${isBold && 'font-bold'} ${
                isItalic && 'italic'
              }`}
              value={newNote.title}
              onChange={handleTitleChange}
            />
            <button type="button" onClick={toggleBold} className={`px-2 py-0.5 text-lg font-bold border rounded shadow  ${boldClicked?'focus:bg-gray-200 ':''} `}>
              B
            </button>
            <button type="button" onClick={toggleItalic} className={`px-3 py-0.5 text-lg italic border rounded shadow ${italicClicked?'focus:bg-gray-200 ':''} `}>
              I
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg">Content:</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter work here..."
            className="p-1 border rounded border-neutral-300"
            value={newNote.content}
            onChange={handleContentChange}
          ></textarea>
        </div>
        <div className="flex items-center gap-4">
          <h1>Note Color: </h1>
          <ul className="flex items-center gap-4">
            {colors.map((color, index) => (
              <li
                key={index}
                className="cursor-pointer h-5 w-5 rounded-[50%] list-none"
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              >
                {selectedColor === color && <FaCheck className="pt-1 pl-1 text-white" />}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className="p-2 text-white bg-blue-500 rounded flex items-center justify-center w-[10%] text-base shadow-md "
        >
          Save Note
        </button>
        <ToastContainer/>
      </form>
    </>
  );
};

export default AddNote;
