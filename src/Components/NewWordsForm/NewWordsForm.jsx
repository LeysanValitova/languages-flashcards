import React from 'react'
import styles from './NewWordsForm.module.css'
import Button from '../Button/Button'
import buttonStyles from '../Button/Button.module.css'


function NewWords() {
  return (
    <form className={styles.form}>
      <div className={styles.form_item}>
        <label htmlFor="english">English:</label>
        <input type="text" name='english' placeholder='cake' className={styles.english}/>
      </div>
      {/*  */}
      <div className={styles.form_item}>
        <label htmlFor="transcription">Transcription:</label>
        <input type="text" name='transcription' placeholder='[keik]' />
      </div>
      {/*  */}
      <div className={styles.form_item}>
        <label htmlFor="translation">Translation:</label>
        <input type="text" name='translation' placeholder='торт' className={styles.translation}/>
      </div>
      <Button
      className={buttonStyles.buttonSave}
      text = "Add"
      />
    </form>
  )
}

export default NewWords