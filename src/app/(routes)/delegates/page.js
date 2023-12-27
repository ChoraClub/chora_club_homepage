"use client";

import React, { useState } from "react";
import Delegates from "@/components/Delegates/ExploreDelegates";
import OfficeHours_Delegate from "@/components/Delegates/OfficeHours_Delegate";

export default function DelegatesMain() {
  const [activePage, setActivePage] = useState("delegates");

  const handleButtonClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="p-10">
      <div className="">
        <button
          className={`inline-flex items-center px-4 py-2 border rounded text-sm font-medium text-gray-700 ${
            activePage === "delegates" ? "bg-gray-300" : "bg-gray-200"
          } hover:bg-gray-300 mr-2`}
          onClick={() => handleButtonClick("delegates")}
        >
          Delegates
        </button>
        <button
          className={`inline-flex items-center px-4 py-2 border rounded text-sm font-medium text-gray-700 ${
            activePage === "officeHours" ? "bg-gray-300" : "bg-gray-200"
          } hover:bg-gray-300`}
          onClick={() => handleButtonClick("officeHours")}
        >
          Office Hours
        </button>

        {activePage === "delegates" && <Delegates />}
        {activePage === "officeHours" && <OfficeHours_Delegate />}
      </div>
    </div>
  );
}
