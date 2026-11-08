"use client";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const dataPromise = fetch("http://localhost:3000/data.json").then((res) => res.json());
export default function Home() {
  const data = use(dataPromise);

  return (
    <>
      <h2 className="text-amber-300">This is Home</h2>
      <div className="grid grid-cols-3">
        {data.map((item) => (
          <Link href={`/friend-details/${item.id}`} key={item.id}>
            this is a friend card...{item.id}
          </Link>
        ))}
      </div>
    </>
  );
}
