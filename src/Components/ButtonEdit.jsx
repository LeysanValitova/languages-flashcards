import React from 'react'
import styles from './ButtonEdit.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Button() {
  return (
    
    <button className={styles.button}>Edit
      <FontAwesomeIcon icon="fa-solid fa-pen" />
      </button>
  )
}

export default Button