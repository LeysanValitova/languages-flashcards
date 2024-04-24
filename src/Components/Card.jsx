import React, { useState } from 'react'
import styles from './Card.module.css'
import Button from './Button'
import ButtonStyles from './Button.module.css'



function Card({english, transcription, translation}) {
const [selected, setSelected] = useState(false)

const handleSelectedState = () => {
    setSelected(!selected)
}

  return (
    <div className={styles.card}>
        <div className={styles.cardEnglish}>
            {english}Word
        </div>
        <div className={styles.cardTranscription}>
            {transcription}[word]
        </div>
        

        {
            selected 
            ? 
            <div
             className={styles.cardTranslation}
             onClick={handleSelectedState}>
            {translation}Слово
        </div> 
            : 
            <Button
            className={ButtonStyles.buttonSave}
            text='Check'
            onClick={handleSelectedState}/>
        }
    </div>
  )
}

export default Card