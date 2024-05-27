import React, { useState } from 'react'
import styles from './NewWordsForm.module.css'
import Button from '../Button/Button'
import buttonStyles from '../Button/Button.module.css'
import { inject, observer } from 'mobx-react'


function NewWords({wordsStore}) {
  const  {handleAdd,setError} = wordsStore;

  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setRussian] = useState("");
 

  const handleAddWord = async (event) => {
    event.preventDefault();
    
    try {
      const newWord = { english, transcription, russian };
      await handleAdd(newWord);
      setEnglish("");
      setTranscription("");
      setRussian("");
    } catch (error) {
      console.error("Error while adding a new word:", error);
      setError("Error while adding a new word");
    }
  }
  


  return (
    <form className={styles.form} >
      <div className={styles.form_item}>
        <label htmlFor="english">English:</label>
        <input type="text" name='english' value={english} 
        onChange={(event) => setEnglish(event.target.value)} 
        placeholder='cake' className={styles.english}/>
      </div>
      {/*  */}
      <div className={styles.form_item}>
        <label htmlFor="transcription">Transcription:</label>
        <input 
        type="text" 
        name='transcription' 
        value={transcription} 
        onChange={(event) => setTranscription(event.target.value)}
        placeholder='[keik]' />
      </div>
      {/*  */}
      <div className={styles.form_item}>
        <label htmlFor="russian">Translation:</label>
        <input 
        type="text" 
        name='russian' 
        value={russian} 
        onChange={(event) => setRussian(event.target.value)}
        placeholder='торт' 
        className={styles.translation}/>
      </div>
      <Button
      className={buttonStyles.buttonSave}
      onClick = {handleAddWord}
      text = "Add"
      />
    </form>
  )
}

export default inject('wordsStore')(observer(NewWords));