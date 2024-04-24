import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Button.module.css'


function Button({text, icon, onClick, className, tooltip}) {
  return (
    <div>
        <button
        
        className={className}
        onClick={onClick}>
            {text}
            {icon}
        </button>
         <span className={styles.tooltip}>{tooltip}</span>
    </div>
      )
}

export default Button