"use client";

import { useState } from "react";
import ExploreDAOs from "@/components/Dao/ExploreDAOs";
import DaoOfficeHours from "@/components/Dao/DaoOfficeHours";

export default function page() {
  const [activePage, setActivePage] = useState("daos");

  const handleButtonClick = (page) => {
    setActivePage(page);
  };
  return (
    <div className="p-10">
      <div>
        <button
          className={`pe-5 py-2 text-xl font-bold text-gray-700 ${
            activePage === "daos" ? "text-gray-800" : "text-gray-300"
          } hover:text-gray-800`}
          onClick={() => handleButtonClick("daos")}
        >
          All DAOs
        </button>
        <button
          className={`pe-5 py-2 text-xl font-bold text-gray-700 ${
            activePage === "office-hours" ? "text-gray-800" : "text-gray-300"
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
