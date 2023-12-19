"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Delegates() {


    // Sample delegate data for demonstration
    const initialDelegates = [
        { id: 1, name: 'Delegate 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus, nobis deleniti numquam, unde placeat quisquam similique perspiciatis in fugiat sapiente aspernatur maxime sunt modi praesentium ex repellendus iure voluptates.' },
        { id: 2, name: 'Delegate 2', description: 'consectetur adipisicing elit. Maiores possimus, nobis deleniti numquam, unde placeat quisquam similique perspiciatis in fugiat sapiente aspernatur maxime sunt modi praesentium ex repellendus iure voluptates.' },
        { id: 3, name: 'Delegate 3', description: 'sit amet consectetur adipisicing elit. Maiores possimus, nobis deleniti numquam, unde placeat quisquam similique perspiciatis in fugiat sapiente aspernatur maxime sunt modi praesentium ex repellendus iure voluptates.' },
    ];

    // State to hold the list of delegates
    const [delegates, setDelegates] = useState(initialDelegates);

    // Function to handle vote delegation
    const delegateVote = (delegate) => {
        // Implement your logic to delegate a vote here
        console.log(`ID: ${delegate.id} \nName: ${delegate.name} \nDesc: ${delegate.description}`);
    };

    const transferData = (delegateData) => {
        // router.push(`/delegates/${delegateData.id}`, { state: { data: delegateData } })
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {initialDelegates.map((delegate) => (
                    <div key={delegate.id} className="bg-white p-4 rounded-md shadow-md cursor-pointer" onClick={() => transferData(delegate)}>
                        <Link href={`/delegates/${delegate.id}`}>
                            <p className="text-lg font-semibold mb-2">{delegate.name}</p>
                        </Link>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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


