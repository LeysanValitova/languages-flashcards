import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const ErrorComponent = ({ error, clearError }) => {
    return (
        <Modal open={error !== ""} onClose={clearError}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                <h3>Error: {error}</h3>
                <button onClick={clearError}>Close</button>
            </Box>
        </Modal>
    );
}
export default ErrorComponent;