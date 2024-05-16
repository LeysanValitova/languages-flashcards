import React, { useRef,useEffect, useState} from 'react'
import styles from './Card.module.css'
import Button from '../Button/Button'
import ButtonStyles from '../Button/Button.module.css'

const Card = (({english, transcription, russian, countLearnedWords}) => {
const [selected, setSelected] = useState(false)
const [counted, setCounted] = useState(false)

const ref = useRef();
 
useEffect(() => ref.current.focus());


const handleSelectedState = () => {
setSelected(!selected)
if(!counted) {
setCounted(true)
countLearnedWords()
}

}



return (
<div className={styles.card}>

{
<div className={selected ? styles.cardBack : styles.cardFront}>
{selected ? (
<div
className={styles.cardTranslation}
onClick={handleSelectedState}
>
{russian}
</div>
) : (
<div className={styles.cardEnglish}>
{english}
</div>
)}

<div className={styles.cardTranscription}>
{transcription}
</div>
<Button
className={ButtonStyles.buttonSave}
text='Check'
onClick={handleSelectedState}
ref={ref}
/>
</div>
}
</div>
)
})

export default Card