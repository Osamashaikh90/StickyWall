import { useState,useEffect } from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterNote } from "../utils/redux/slices/addNoteSlice";

const Header = () => {
  const [search,setSearch] = useState("");
    const location = useLocation();
    const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(filterNote(search))
  },[search,dispatch])
   
  return (
    <>
      <div className="flex items-center justify-between xxsm:px-5 my-3 rounded-md shadow-md md:px-2 md:py-[2px] md:mx-4 sticky top-0 z-50 bg-slate-50">
        <div>
          <h1 className="font-medium text-black cursor-pointer xxsm:text-xs xsm:text-base md:text-3xl font-Cursive hover:transform hover:scale-100 ">
            Sticky Wall
          </h1>
        </div>
        {/*  */}
        <div className=" search w-[70%]  p-2 flex justify-center items-center">
          <input
            type="search"
            name="searh"
            id=""
            autoComplete="off"
            placeholder="Search notes..."
            className="px-4 py-2 border rounded-full xxsm:w-3/4 md:w-2/4 border-neutral-300 focus:border-blue-800 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/*  */}
        {location.pathname === '/addnote' ? 
        <Link to="/">
          <button className="flex items-center gap-2">
            <IoMdHome className="text-xl" />
           Home
          </button>
        </Link>:
        <Link to="/addnote">
          <button className="flex items-center gap-2">
            <MdOutlinePostAdd className="text-xl" />
            Add
          </button>
        </Link>}
       
      </div>
    </>
  );
};

export default Header;
