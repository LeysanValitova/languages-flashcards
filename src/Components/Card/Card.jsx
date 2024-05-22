import React, { useRef, useEffect} from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";
import ButtonStyles from "../Button/Button.module.css";

const Card = ({ english, transcription, russian, countLearnedWords, selected, setSelected, showRussian, setShowRussian}) => {
   
    const ref = useRef();


  
    useEffect(() => ref.current.focus(), []);
  
    const checkCount = () => {
      countLearnedWords();
    };
  

    function handleSelect() {
        setSelected(!selected);
        setShowRussian(false); 
        setTimeout(() => setShowRussian(true), 1000); 
    }

    const handleSelectedState = () => {
    handleSelect() 
    checkCount();
    };
  
  
  
    return (
      <div className={styles.wrapper}>
        <div className={`${styles.card} ${selected ? styles.cardSelected : ""}`}>
          <div className={styles.front}>
            <div className={styles.cardEnglish}>{english}</div>
            <div className={styles.cardTranscription}>{transcription}</div>
            <Button
              className={ButtonStyles.buttonSave}
              text="Check"
              onClick={handleSelectedState}
              ref={ref}
            />
          </div>
          <div className={styles.back}>
            <div className={styles.cardTranslation} onClick={handleSelect}>
            {showRussian && russian} 
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
