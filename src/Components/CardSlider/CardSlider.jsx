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
  const [counted, setCounted] = useState(false);
  const [showRussian, setShowRussian] = useState(false);
  const [selected, setSelected] = useState(false);
  
  const handleSelect = () => {
    setSelected(!selected);
  };



  const countLearnedWords = () => {
    if (!counted) { 
        setLearnedWord(learnedWords + 1);
        setCounted(true); 
        handleSelect()
    }
}

    
    
    function showPrevious() {
        position === 0 ? setPosition(words.length-1) : setPosition(position-1)
        setSelected(false);
        setShowRussian(false);
    }
    
    function showNext() {
        position === words.length-1? setPosition(0) :  setPosition(position+1)
        setCounted(false);
        setSelected(false);
        setShowRussian(false); 
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
        selected = {selected}
        setSelected={setSelected}
        showRussian={showRussian}
        setShowRussian={setShowRussian}
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