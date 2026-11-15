"use client";
import { useContext } from "react";
import { IoCallSharp, IoVideocamOffOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { AppContext } from "../context/AppContext";

const CheckIn = ({ item }) => {
  const { checkInButton, logs } = useContext(AppContext);

  return (
    <div className="bg-[#ffffff] flex flex-col px-6 py-6 rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] col-span-3">
      <p className="font-medium text-xl text-font-darkGreen">Quick Check-in</p>
      <div className="flex gap-2 mt-2.5 md:mt-4 flex-1">
        <button
          onClick={() => checkInButton("Call", item)}
          className="flex hover:cursor-pointer hover:text-green-700 flex-col items-center justify-center gap-1 border flex-1 border-gray-200 bg-gray-100 px-3 rounded"
        >
          <IoCallSharp className="text-lg md:text-3xl"></IoCallSharp> Calls
        </button>
        <button
          onClick={() => checkInButton("Text", item)}
          className="flex hover:cursor-pointer hover:text-blue-700 flex-col items-center justify-center gap-1 border flex-1 border-gray-200 bg-gray-100 px-3 rounded"
        >
          <MdOutlineTextsms className="text-lg md:text-3xl"></MdOutlineTextsms>Text
        </button>
        <button
          onClick={() => checkInButton("video", item)}
          className="flex hover:cursor-pointer hover:text-violet-700 flex-col items-center justify-center gap-1 border flex-1 border-gray-200 bg-gray-100 px-3 rounded "
        >
          <IoVideocamOffOutline className="text-lg md:text-3xl"></IoVideocamOffOutline> Video
        </button>
      </div>
    </div>
  );
};

export default CheckIn;
