import Link from "next/link";
import React from "react";

import Card from "./Card";

const CardGrid = ({ friendsData }) => {
  return (
    <div className="flex flex-col gap-2 pt-5 border-t border-t-gray-300">
      <h2 className="font-semibold text-2xl text-font-green">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friendsData.map((item) => (
          <Card item={item} key={item.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
