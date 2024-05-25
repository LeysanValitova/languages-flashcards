import React from 'react';

const ErrorComponent = ({ error, ClearError }) => {
    return (
        <div>
            <h3>Error: {error}</h3>
            <button onClick={ClearError}>Close</button>
        </div>
    );
}

export default ErrorComponent;