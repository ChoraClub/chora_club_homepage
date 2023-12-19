import React from 'react';

function IndividualDelegate({ id, name, description }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>ID: {id}</p>
            <p>Description: {description}</p>
            {/* Add more details as needed */}
        </div>
    );
}

export default IndividualDelegate;