import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ item }) => {
  const tags = item.tags;
  return (
    <Link href={`friend-details/${item.id}`}>
      <div className="bg-[#ffffff] space-y-2 w-full h-full px-6 py-6 flex flex-col items-center rounded-xl shadow-[0_3px_6px_0_rgba(0,0,0,0.08)]">
        <Image
          src={item.picture}
          alt="this is a image of friend"
          width="80"
          height="80"
          className="rounded-full"
        ></Image>
        <h2 className="text-nowrap">{item.name}</h2>
        <p className="text-gray-400">{item.days_since_contact}d ago</p>
        <div className="flex flex-col lg:flex-row gap-1">
          {tags.map((tag, ind) => (
            <span
              key={ind}
              className="font-medium text-nowrap flex justify-center items-center text-xs px-2 py-1.5 rounded-4xl bg-[#cbfadb] text-[#244d3f]"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

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
            font-medium text-white px-2 py-2 text-xs rounded-3xl`}
        >
          {item.status}
        </span>
      </div>
    </Link>
  );
};

export default Card;
