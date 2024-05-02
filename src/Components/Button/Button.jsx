import React from 'react'
import styles from './Button.module.css'


function Button({text, icon, onClick, className, tooltip, ref}) {
  return (
    <div>
        <button
        
        className={className}
        ref={ref}
        onClick={onClick}>
            {text}
            {icon}
        </button>
         <span className={styles.tooltip}>{tooltip}</span>
    </div>
      )
}

export default Button