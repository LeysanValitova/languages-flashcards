import React, { useEffect, useState, useRef} from 'react'
import styles from './Card.module.css'
import Button from '../Button/Button'
import ButtonStyles from '../Button/Button.module.css'



function Card({english, transcription, translation, countLearnedWords}) {

    const [selected, setSelected] = useState(false)
    const buttonRef = useRef(null)


    const handleSelectedState = () => {
        setSelected(!selected)
        countLearnedWords()
}

useEffect(()=> {
    if(buttonRef.current) {
        buttonRef.current.focus()
    }
}, [])

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
                onClick={handleSelectedState}
                ref={buttonRef}
                />
            </div>
        }
    </div>
  )
}

export default Card