"use client";

import React, { useState } from "react";
import ExploreDAOs from "@/components/Dao/ExploreDAOs";
import DaoOfficeHours from "@/components/Dao/DaoOfficeHours";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Page() {
  const [activePage, setActivePage] = useState("daos");

  const handleButtonClick = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <div>
        <button
          className={`pe-5 py-2 text-xl font-bold  ${
            activePage === "daos" ? "text-light-navy-blue" : "text-gray-300"
          } hover:text-gray-800`}
          onClick={() => handleButtonClick("daos")}
        >
          All DAOs
        </button>
        <button
          className={`pe-5 py-2 text-xl font-bold  ${
            activePage === "office-hours" ? "text-light-navy-blue" : "text-gray-300"
          } hover:text-gray-800`}
          onClick={() => handleButtonClick("office-hours")}
        >
          Office Hours
        </button>
      </div>

      <div className="py-6">
        {activePage === "daos" && <ExploreDAOs />}
        {activePage === "office-hours" && <DaoOfficeHours />}
      </div>
    </div>
  );
}
