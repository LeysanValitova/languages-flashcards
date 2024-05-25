import React from 'react';

const ErrorComponent = ({ error, сlearError }) => {
    return (
        <div>
            <h3>Error: {error}</h3>
            <button onClick={сlearError}>Close</button>
        </div>
    );
}

export default ErrorComponent;