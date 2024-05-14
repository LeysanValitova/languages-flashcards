import React, { useState } from 'react'
import styles from './NewWordsForm.module.css'
import Button from '../Button/Button'
import buttonStyles from '../Button/Button.module.css'
import { inject, observer } from 'mobx-react'


function NewWords({wordsStore, id, english, transcription, russian}) {
  const  {handleAdd} = wordsStore;

  const [value, setValue] = useState({
        id,
        english,
        transcription,
        russian,
  })

  const handleAddWord = (e) => {
  e.preventDefault();
  // проверка на пустоту
if(value.trim()===''){return}
 
    handleAdd(value)

    setValue('');
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value)

  }

  return (
    <form className={styles.form} onSubmit={handleAddWord}>
      <div className={styles.form_item}>
        <label htmlFor="english">English:</label>
        <input type="text" name='english' value={value.english} onChange={handleChange} placeholder='cake' className={styles.english}/>
      </div>
      {/*  */}
      <div className={styles.form_item}>
        <label htmlFor="transcription">Transcription:</label>
        <input type="text" name='transcription' value={value.transcription} onChange={handleChange} placeholder='[keik]' />
      </div>
      {/*  */}
      <div className={styles.form_item}>
        <label htmlFor="russian">Translation:</label>
        <input type="text" name='russian' value={value.russian} onChange={handleChange} placeholder='торт' className={styles.translation}/>
      </div>
      <Button
      className={buttonStyles.buttonSave}
      type = "submit"
      text = "Add"
      />
    </form>
  )
}

export default inject('wordsStore')(observer(NewWords));