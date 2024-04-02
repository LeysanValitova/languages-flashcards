import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ButtonDelete.module.css'


function ButtonDelete() {
  return (
    <button className={styles.button}>Delete
      <FontAwesomeIcon icon="fa-solid fa-pen" />
      </button>
  )
}

export default ButtonDelete