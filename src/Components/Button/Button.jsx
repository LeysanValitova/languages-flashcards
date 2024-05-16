import React, { forwardRef } from 'react'
import styles from './Button.module.css'


const Button = forwardRef(({text, icon, onClick, className, tooltip, disabled, type}, ref) => {


  return (
    <div>
        <button
        
        className={className}
        ref={ref}
        onClick={onClick}
        type= {type}
        disabled={disabled}>
            {text}
            {icon}
        </button>
        <span className={styles.tooltip}>{tooltip}</span>
    </div>
      )
}
)

export default Button