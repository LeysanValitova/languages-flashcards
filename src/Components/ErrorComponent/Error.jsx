import React from 'react';

const ErrorComponent = ({ error, onClearError }) => {
    return (
        <div>
            <h3>Error: {error}</h3>
            <button onClick={onClearError}>Close</button>
        </div>
    );
}

export default ErrorComponent;