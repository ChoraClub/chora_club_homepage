"use client";

import React, { useState } from 'react';
import Link from 'next/link';

function Delegates() {
    // Sample delegate data for demonstration
    const initialDelegates = [
        { id: 1, name: 'Delegate 1' },
        { id: 2, name: 'Delegate 2' },
        { id: 3, name: 'Delegate 3' },
    ];

    // State to hold the list of delegates
    const [delegates, setDelegates] = useState(initialDelegates);

    // Function to handle vote delegation
    const delegateVote = (delegateId) => {
        // Implement your logic to delegate a vote here
        console.log(`Vote delegated to Delegate ${delegateId}`);
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {initialDelegates.map((delegate) => (
                    <Link key={delegate.id} href={`/delegates/${delegate.id}`} passHref>
                        <div className="bg-white p-4 rounded-md shadow-md cursor-pointer">
                            <p className="text-lg font-semibold mb-2">{delegate.name}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                onClick={delegateVote(delegate.id)}>
                                Delegate Vote
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Delegates;
