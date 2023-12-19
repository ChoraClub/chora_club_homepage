"use client";

import { useRouter } from 'next/router';
import React from 'react';

function IndividualDelegate() {
    const router = useRouter();
    const { id, name } = router.query;

    // Fetch delegate data based on the ID from your API or any other data source

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Individual Delegate</h2>
            <p>Delegate ID: {id}</p>
            <p>Delegate Name: {name}</p>
            {/* Render other delegate information here */}
        </div>
    );
}

export default IndividualDelegate;
