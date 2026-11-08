import Link from "next/link";
import React from "react";
import friendsData from "../../../public/data.json";
import Card from "./Card";

const CardGrid = () => {
  return (
    <div className="flex flex-col gap-2 pt-5 border-t border-t-gray-300">
      <h2 className="font-semibold text-2xl text-font-green">Your Friends</h2>
      <div className="grid grid-cols-4 gap-6">
        {friendsData.map((item) => (
          <Card item={item} key={item.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
