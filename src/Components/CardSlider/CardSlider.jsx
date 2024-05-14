import React from 'react'
import { useState,useEffect} from 'react'
import styles from './CardSlider.module.css'
import Card from '../Card/Card'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function CardSlider({wordsStore}) {
    const {words, isLoaded, loadData} = wordsStore;

  useEffect(() => {
    loadData();
  }, [loadData]);

  const [position, setPosition] = useState(0);
  const [learnedWords, setLearnedWord] = useState(0);
  
  
  const countLearnedWords = () => {
      setLearnedWord(learnedWords + 1)
    }
    
    
    function showPrevious() {
        position === 0 ? setPosition(words.length-1) : setPosition(position-1)
    }
    
    function showNext() {
        position === words.length-1? setPosition(0) :  setPosition(position+1)
    }
    
    
    if (!isLoaded) { return <div>Loading...</div>;}
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
        english={words[position].english}
        transcription={words[position].transcription}
        russian={words[position].russian}
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
        {position+1}/{words.length}
        </div>
        </div>
        <p>Выучено слов: {learnedWords} </p>
        </React.Fragment>
)
}



export default inject('wordsStore')(observer(CardSlider)); 