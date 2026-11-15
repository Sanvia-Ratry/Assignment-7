"use client";
import React, { createContext, useContext, useState } from "react";
import { BiText, BiVideo } from "react-icons/bi";
import { IoCall, IoCallSharp, IoVideocamOffOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);

  function checkInButton(BtnName, item) {
    BtnName = BtnName.toLowerCase();
    const newLogs = {
      name: item.name,
      activity: BtnName,
      date: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
    setLogs([newLogs, ...logs]);
    toast.success(`${BtnName} with ${item.name}`, {
      icon:
        BtnName == "call" ? (
          <IoCallSharp className="text-3xl"></IoCallSharp>
        ) : BtnName == "text" ? (
          <MdOutlineTextsms className="text-3xl"></MdOutlineTextsms>
        ) : BtnName == "video" ? (
          <IoVideocamOffOutline className="text-3xl"></IoVideocamOffOutline>
        ) : (
          ""
        ),
      className: `toast-${BtnName.toLowerCase()}`,
    });
  }
  return <AppContext.Provider value={{ checkInButton, logs }}>{children}</AppContext.Provider>;
};

export default AppProvider;
