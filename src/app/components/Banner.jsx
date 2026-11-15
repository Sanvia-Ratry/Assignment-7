import React from "react";
import { BiCurrentLocation } from "react-icons/bi";

const Banner = ({ friendsData }) => {
  const total = friendsData.length;
  const onTrack =
    friendsData?.filter((friend) => friend.status?.toLowerCase() === "on track").length || 0;
  const attention =
    friendsData?.filter((friend) => friend.status?.toLowerCase() === "due").length || 0;
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const InteractionThisMonth = friendsData.filter((friends) => {
    const dueDate = new Date(friends.next_due_date);
    return dueDate.getFullYear() === currentYear && dueDate.getMonth() === currentMonth;
  });
  console.log(InteractionThisMonth);

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
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="px-8 py-8 font-semibold text-3xl text-font-darkGreen border border-gray-100 rounded-lg bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)]">
          <p>{total}</p>
          <span className="font-normal text-lg text-gray-400">Total</span>
        </div>
        <div className="px-8 py-8 border font-semibold text-3xl text-font-darkGreen border-gray-100 rounded-lg bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)]">
          <p>{onTrack}</p>
          <span className="font-normal text-lg text-gray-400">On Track</span>
        </div>
        <div className="px-8 py-8 border font-semibold text-3xl text-font-darkGreen border-gray-100 rounded-lg bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)]">
          <p>{attention}</p>
          <span className="font-normal text-lg text-gray-400">Need Attention</span>
        </div>
        <div className="font-semibold text-3xl text-font-darkGreen px-6 py-8 border border-gray-100 rounded-lg bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)]">
          <p>{InteractionThisMonth.length}</p>
          <span className="font-normal text-lg text-gray-400">Interactions this month</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
