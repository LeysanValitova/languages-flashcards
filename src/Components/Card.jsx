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

        {
            selected 
            ? 
            <div className={styles.cardBack}> 

            <div
             className={styles.cardTranslation}
             onClick={handleSelectedState}>
            {translation}
        </div> 
            </div>
            : 
            <div className={styles.cardFront}>
            <div className={styles.cardEnglish}>
                {english}
            </div>
            <div className={styles.cardTranscription}>
                {transcription}
            </div>
            <Button
                className={ButtonStyles.buttonSave}
                text='Check'
                onClick={handleSelectedState}/>
            </div>
        }
    </div>
  )
}

export default Card