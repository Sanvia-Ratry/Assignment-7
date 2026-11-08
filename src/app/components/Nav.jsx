"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsDown } from "react-icons/tfi";
const navLinks = [
  { name: "Home", href: "/", icon: AiOutlineHome },
  { name: "Timeline", href: "/timeline", icon: RiTimeLine },
  { name: "Stats", href: "/stats", icon: TfiStatsDown },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between py-4 px-20 border border-b border-gray-200">
      <div className="text-2xl font-medium text-[#244d3f]">
        <span className="text-[#1f2937] font-extrabold">Keen</span>Keeper
      </div>
      <div className="flex gap-1">
        {navLinks.map((link) => {
          const ReactIcons = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${isActive ? "border rounded-sm bg-green-800 text-white" : ""}
            flex gap-1 items-center px-4 py-3 text-[#64748b] font-medium`}
            >
              <ReactIcons className="h-5 w-6"></ReactIcons>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
