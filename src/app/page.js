"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense, use } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import Banner from "./components/Banner";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <>
      <div className="px-60 py-20 flex flex-col justify-center bg-[#f8fafc]">
        <Banner></Banner>
        <CardGrid></CardGrid>
      </div>
    </>
  );
}
