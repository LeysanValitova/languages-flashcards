import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '../Button/Button';
import ButtonStyles from'../Button/Button.module.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxWidth: '500px',
    backgroundImage: 'linear-gradient(90deg, hsla(335, 100%, 96%, 1) 50%, hsla(0, 0%, 100%, 1) 100%)',
    border: '2px solid rgb(92, 1, 97)',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
  };

const ErrorComponent = ({ error, clearError }) => {

    return (
        <Modal open={error !== ""} onClose={clearError}>
            <Box sx={style}>
                <h3>Error: {error}</h3>
                <Button
                className={ButtonStyles.buttonCansel}
                onClick={clearError}
                text = 'Close'/>
            </Box>
        </Modal>
    );
}
export default ErrorComponent;