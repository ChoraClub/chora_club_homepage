"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import arbImage from "@/assets/daos/arbitrum.jpg";
import Image from "next/image";

export default function Delegates({ params }) {
  const router = useRouter();

  console.log(params)

  // Sample delegate data for demonstration
  const initialDelegates = [
    {
      id: 1,
      name: "Delegate 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus, nobis deleniti numquam, unde placeat quisquam similique perspiciatis in fugiat sapiente aspernatur maxime sunt modi praesentium ex repellendus iure voluptates.",
      image: arbImage,
    },
    {
      id: 2,
      name: "Delegate 2",
      description:
        "consectetur adipisicing elit. Maiores possimus, nobis deleniti numquam, unde placeat quisquam similique perspiciatis in fugiat sapiente aspernatur maxime sunt modi praesentium ex repellendus iure voluptates.",
      image: arbImage,
    },
    {
      id: 3,
      name: "Delegate 3",
      description:
        "sit amet consectetur adipisicing elit. Maiores possimus, nobis deleniti numquam, unde placeat quisquam similique perspiciatis in fugiat sapiente aspernatur maxime sunt modi praesentium ex repellendus iure voluptates.",
      image: arbImage,
    },
  ];

  // State to hold the list of delegates
  const [delegates, setDelegates] = useState(initialDelegates);

  // Function to handle vote delegation
  const delegateVote = (delegate) => {
    // Implement your logic to delegate a vote here
    console.log(
      `ID: ${delegate.id} \nName: ${delegate.name} \nDesc: ${delegate.description}`
    );
  };

  const transferData = (delegateData) => {
    console.log(delegateData);
    // router.push(`/delegates/${delegateData.id}`, { query: { data: delegateData } });
  };

  return (
    <div>
      <div className="m-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {initialDelegates.map((delegate) => (
          <div
            key={delegate.id}
            className="relative bg-white p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-pink-300 opacity-10 rounded-md"></div>
            {/* <Link href={`/delegates/${delegate.id}`} passHref> */}
            <div
              className="flex items-center relative z-10"
              onClick={() => {
                router.push(`/all-daos/${delegate.id}`);
              }}
            >
              <div className="relative w-12 h-12 mb-2 overflow-hidden rounded-full">
                {/* Adjusted the size of the image */}
                <Image src={delegate.image} alt={delegate.name} />
              </div>
              <div className="ml-2">
                <p className="text-lg font-semibold mb-2 text-black">
                  {delegate.name}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2 text-gray-600">
              {delegate.description}
            </p>
            {/* </Link> */}
            <button
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-md hover:opacity-90 focus:outline-none focus:ring focus:border-green-300 transition-all duration-300 ease-in-out"
              onClick={() => delegateVote(delegate)}
            >
              Delegate Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
