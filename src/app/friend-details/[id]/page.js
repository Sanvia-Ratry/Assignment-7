import React from "react";
import data from "/public/data.json";
import NotFound from "@/app/not-found";
import Image from "next/image";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formatDate } from "@/app/utils/formate";
import { IoCallSharp, IoVideocamOffOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import CheckIn from "@/app/components/CheckIn";

const page = async ({ params }) => {
  const { id } = await params;
  const item = data.find((item) => String(item.id) === String(id));
  const tags = item.tags;
  if (!item) {
    return NotFound();
  }
  return (
    <div className="px-15 sm:px-25 md:px-35 lg:px-45 xl:px-60 py-20 flex flex-col  lg:grid grid-cols-3 gap-6 bg-[#f8fafc]">
      <div className="col-span-1  grid grid-rows-7 gap-4">
        <div className="row-span-4 bg-[#ffffff] space-y-1 w-full h-full px-6 py-6 flex flex-col items-center rounded-xl shadow-[0_3px_6px_0_rgba(0,0,0,0.08)]">
          <Image
            src={item.picture}
            alt="this is a image of friend"
            width="80"
            height="80"
            className="rounded-full"
          ></Image>
          <h2 className="font-semibold text-xl text-font-green">{item.name}</h2>

          <span
            className={`${
              item.status === "Due"
                ? "bg-red-600"
                : item.status === "Almost due"
                  ? "bg-yellow-400"
                  : item.status === "on track"
                    ? "bg-green-800"
                    : ""
            }
                    font-medium text-xs text-white px-2 py-2 rounded-3xl`}
          >
            {item.status}
          </span>
          <div className="flex gap-1">
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="font-medium text-xs px-2 py-2 rounded-4xl bg-[#cbfadb] text-[#244d3f]"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          <p className="text-gray-500 font-medium text-center italic font-sans">
            &ldquo;{item.bio.replace(/\.$/, "")}&rdquo;
          </p>
          <p className="text-gray-500 text-center">{item.email}</p>
        </div>
        <div className="bg-[#ffffff] rounded-lg border border-gray-100 shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] row-span-1 flex gap-2 justify-center font-medium items-center">
          <HiOutlineBellSnooze className="text-xl"></HiOutlineBellSnooze>
          Snooze 2 Weeks
        </div>
        <div className="bg-[#ffffff] rounded-lg border border-gray-100 shadow-[0_3px_6px_0_rgba(0,0,0,0.08)]  row-span-1 flex gap-2 font-medium  justify-center items-center ">
          <FiArchive></FiArchive>
          Archive
        </div>
        <div className="bg-[#ffffff] rounded-lg border border-gray-100 shadow-[0_3px_6px_0_rgba(0,0,0,0.08)]  row-span-1 gap-2 font-medium text-red-600 justify-center  flex items-center">
          <RiDeleteBin6Line></RiDeleteBin6Line>Delete
        </div>
      </div>
      <div className=" col-span-2 grid grid-cols-3 grid-rows-3 gap-6  ">
        <div className="bg-[#ffffff] flex flex-col items-center justify-center rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] col-span-1">
          <span className=" font-semibold text-xl md:text-3xl text-font-darkGreen">
            {item.days_since_contact}
          </span>
          <p className="font-normal text-sm md:text-lg text-gray-500 text-wrap text-center">
            Days Since Contact
          </p>
        </div>
        <div className="bg-[#ffffff] flex flex-col items-center justify-center rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] col-span-1">
          <span className="font-semibold text-xl md:text-3xl text-font-darkGreen">{item.goal}</span>
          <p className="font-normal text-sm md:text-lg text-gray-500">Goal (Days)</p>
        </div>
        <div className="bg-[#ffffff] flex flex-col items-center justify-center rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] col-span-1">
          <span className="font-semibold text-xl md:text-3xl text-font-darkGreen text-center">
            {formatDate(item.next_due_date)}
          </span>
          <p className="font-normal text-sm md:text-lg text-gray-500">Next Due</p>
        </div>
        <div className="bg-[#ffffff] px-6 flex flex-col justify-center gap-2 rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] col-span-3">
          <div className="flex justify-between">
            <span className="text-font-darkGreen text-lg sm:text-xl font-medium">
              Relationship Goals
            </span>
            <button className="border border-gray-200 bg-gray-100 px-3 rounded">Edit</button>
          </div>
          <div>
            <p className="font-normal text-lg text-gray-500">
              Connect every <span className="font-bold text-font-green">{item.goal} days</span>
            </p>
          </div>
        </div>
        <CheckIn item={item}></CheckIn>
      </div>
    </div>
  );
};

export default page;
