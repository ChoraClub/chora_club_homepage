"use client";

import React, { useState } from "react";
// import { useSearchParams } from "next/navigation";
import Delegates from "@/components/Delegates/ExploreDelegates";
import OfficeHours_Delegate from "@/components/Delegates/OfficeHours_Delegate";

export default function Page({ params }) {
  // const searchParams = useSearchParams();
  // console.log("searchParams", searchParams)

  // console.log("params", params)
  //   const { name, value } = router.query;

  const [activePage, setActivePage] = useState("delegates");

  const handleButtonClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="">
      <div className="">
        <button
          className={`inline-flex items-center px-4 py-2 border rounded text-sm font-medium text-gray-700 ${activePage === "delegates" ? "bg-gray-300" : "bg-gray-200"
            } hover:bg-gray-300 mr-2`}
          onClick={() => handleButtonClick("delegates")}
        >
          Delegates
        </button>
        <button
          className={`inline-flex items-center px-4 py-2 border rounded text-sm font-medium text-gray-700 ${activePage === "officeHours" ? "bg-gray-300" : "bg-gray-200"
            } hover:bg-gray-300`}
          onClick={() => handleButtonClick("officeHours")}
        >
          Office Hours
        </button>

        {activePage === "delegates" && <Delegates params={params} />}
        {activePage === "officeHours" && <OfficeHours_Delegate />}
      </div>
    </div>
  );
}
