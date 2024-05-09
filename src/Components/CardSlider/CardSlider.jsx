import React from 'react'
import { useState,} from 'react'
import styles from './CardSlider.module.css'
import Card from '../Card/Card'
import data from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function CardSlider() {
    const [position, setPosition] = useState(0);
    const [learnedWords, setLearnedWord] = useState(0);


    const countLearnedWords = () => {
        setLearnedWord(learnedWords + 1)
    }
    
    
    function showPrevious() {
        position === 0 ? setPosition(data.length-1) : setPosition(position-1)
    }
    
    function showNext() {
        position === data.length-1? setPosition(0) :  setPosition(position+1)
    }


    return (
        <React.Fragment>
    <div>
    <div className={styles.cardSliderWrapper}>
        <FontAwesomeIcon
        icon={faArrowLeftLong}
        size='2xl'
        className={styles.CardSliderArrowLeft}
        onClick={showPrevious}/>


    <Card
        english={data[position].english}
        transcription={data[position].transcription}
        translation={data[position].translation}
        className={position > 0 ? `${styles.card} ${styles['card-transition-left']}` : styles.card}
        countLearnedWords={countLearnedWords}
        />
        <FontAwesomeIcon
        icon={faArrowRightLong}
        size='2xl'
        className={styles.CardSliderArrowLeft}
        onClick={showNext}/>


    </div>
        <div className={styles.CardSliderCounter}>
        {position+1}/{data.length}
        </div>
        </div>
        <p>Выучено слов: {learnedWords} </p>
        </React.Fragment>
)
}



export default CardSlider