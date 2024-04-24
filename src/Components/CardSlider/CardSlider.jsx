import React from 'react'
import { useState } from 'react'
import styles from './CardSlider.module.css'
import Card from '../Card'
import data from '../data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function CardSlider() {
    const [position, setPosition] = useState(0);

    function showPrevious() {
        position === 0 ? setPosition(data.length-1) : setPosition(position-1)
    }

    function showNext() {
        position === data.length-1? setPosition(0) :  setPosition(position+1)
    }

  return (
    <div>
    <div className={styles.cardSliderWrapper}>
        <FontAwesomeIcon
        icon={faArrowLeftLong}
        size='2xl'
        className={styles.CardSliderArrowLeft}
        onClick={showPrevious}/>

       {data.map((word)=>{
        return <Card rowData={word} key={word.id} />
       }
    )
}
    
   

        <FontAwesomeIcon
        icon={faArrowRightLong}
        size='2xl'
        className={styles.CardSliderArrowLeft}
        onClick={showNext}/>


    </div>
        <div className={styles.CardSliderCounter}>
        {position}/{data.length}
        </div>
        </div>
  )
}



export default CardSlider