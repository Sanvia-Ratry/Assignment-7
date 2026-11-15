"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense, use } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import Banner from "./components/Banner";
import CardGrid from "./components/CardGrid";
import friendsData from "../../public/data.json";

export default function Home() {
  return (
    <>
      <div className="px-25 md:px-35 lg:px-45 xl:px-60 py-20 flex flex-col justify-center bg-[#f8fafc]">
        <Banner friendsData={friendsData}></Banner>
        <CardGrid friendsData={friendsData}></CardGrid>
      </div>
    </>
  );
}
