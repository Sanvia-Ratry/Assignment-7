import React from "react";
import data from "/public/data.json";
import NotFound from "@/app/not-found";

const page = async ({ params }) => {
  const { id } = await params;
  const friend = data.find((item) => String(item.id) === String(id));
  if (!friend) {
    return NotFound();
  }
  console.log("this is the details page");
  return (
    <div>
      <h2>this is details page: {friend.name}</h2>
    </div>
  );
};

export default page;
