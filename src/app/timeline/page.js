"use client";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { IoCall, IoCallOutline, IoTextOutline } from "react-icons/io5";
import { PiTextIndent } from "react-icons/pi";
import { BiPhoneCall, BiVideo } from "react-icons/bi";
import { FaEnvelopeOpenText, FaVideo } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";

const Page = () => {
  const { logs } = useContext(AppContext);
  const [filterType, setFilter] = useState("all");

  const filteredLogs = logs.filter((item) => {
    if (filterType === "all") {
      return true;
    }
    return item.activity.toLowerCase() === filterType;
  });
  console.log(filteredLogs);

  return (
    <div className="bg-[#f8fafc] flex flex-col gap-5 px-60 py-20">
      <div className="space-y-6">
        <h1 className="font-bold text-5xl text-font-green">Timeline</h1>
        <div className="w-48">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded text-sm font-medium text-gray-700 cursor-pointer focus:outline-none"
          >
            <option value="all">Filter Timeline</option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>
        </div>
      </div>
      {filteredLogs.map((item, ind) => (
        <div
          key={ind}
          className="bg-[#ffffff] px-4 py-4 border border-gray-100 flex flex-row gap-4 rounded"
        >
          {item.activity.toLowerCase() === "call" ? (
            <div className="flex items-center text-3xl  text-green-700">
              <BiPhoneCall></BiPhoneCall>
            </div>
          ) : item.activity.toLowerCase() === "text" ? (
            <div className="flex items-center text-3xl text-blue-700">
              <FaEnvelopeOpenText></FaEnvelopeOpenText>
            </div>
          ) : item.activity.toLowerCase() === "video" ? (
            <div className="flex items-center text-3xl text-violet-700">
              <FaVideo></FaVideo>
            </div>
          ) : null}
          <div>
            <div className="text-gray-400">
              <span className="text-font-darkGreen text-xl font-medium">{item.activity} </span>
              with {item.name}
            </div>
            <div>
              <p className="font-normal text-lg text-gray-500">{item.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Page;
