import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ButtonSave.module.css'


function ButtonSave() {
  return (
    <button className={styles.button}>Add
    <FontAwesomeIcon icon="fa-solid fa-pen" />
    </button>
  )
}

export default ButtonSave