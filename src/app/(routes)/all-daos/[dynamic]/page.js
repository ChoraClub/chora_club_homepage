"use client"

import React from "react";
// import { useSearchParams } from "next/navigation";

export default function Page({ params }) {
  // const searchParams = useSearchParams();
  //   const { name, value } = router.query;

  return (
    <div>
      <div className="text-blue-500">Name: {params.dynamic}</div>
      {/* <div>Value: {value}</div> */}
    </div>
  );
}
