import React from "react";

const Banner = () => {
  return (
    <div className="text-center space-y-4">
      <h2 className="font-bold text-5xl text-font-green">Friends to keep close in your life</h2>
      <p className="text-[#64748b]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>{" "}
        relationships that matter most.
      </p>
      <button className="mt-4 border rounded-sm bg-green-800 text-white px-4 py-3 font-medium">
        Add Friend
      </button>
    </div>
  );
};

export default Banner;
