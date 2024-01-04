"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import delegateLogo from "@/assets/daos/arbitrum.jpg";
import Image from "next/image";

export default function IndividualDelegate({ params }) {
  // const searchParams = useSearchParams();
  // const { id } = router.query;

  const votingInfo = {
    "Proposals voted": 100,
    "For / Against / Abstain": { for: 100, against: 0, abstain: 0 },
    "Vote power": `6.19% votable supply \n20.37% quorum`,
    "Recent activity": "N/A",
    "Proposals created": 5,
    "Delegated from": 115,
  };

  const voteDistributionArray = Object.entries(
    votingInfo["For / Against / Abstain"]
  );
  const delegateImage = delegateLogo;
  const delegateName = "John Doe"; // Replace with actual delegate name

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md p-6 rounded-lg w-96">
        {/* <h2 className="text-2xl font-bold mb-4 text-blue-600">Individual Delegate</h2> */}
        <div className="flex items-center mb-4">
          {/* Image on the left side */}
          <Image
            src={delegateLogo}
            alt="Delegate"
            className="w-12 h-12 rounded-full mr-4"
          />

          {/* Name on the right side */}
          <h2 className="text-lg font-bold text-blue-600">
            {params.IDdelegate}
          </h2>
          {/* <h2 className="text-lg font-bold text-blue-600">{delegateName}</h2> */}
        </div>
        <hr className="mb-4" />
        <div className="mb-4">
          {Object.entries(votingInfo).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between text-sm text-gray-600 mb-2"
            >
              <span className="font-semibold">{key}:</span>{" "}
              {key === "For / Against / Abstain" ? (
                <div>
                  {voteDistributionArray.map(([subKey, subValue], index) => (
                    <span key={subKey}>
                      {subValue}
                      {index < voteDistributionArray.length - 1 && " /"}{" "}
                      {/* Add "/" if it's not the last item */}
                    </span>
                  ))}
                </div>
              ) : key === "Vote power" ? (
                <div>
                  {value.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              ) : (
                value
              )}
            </div>
          ))}
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Delegate
        </button>
      </div>
    </div>
  );
}
