import React from 'react'
import { useState } from 'react';
import styles from './TableRow.module.css'
import Button from '../Button/Button';
import ButtonStyles from '../Button/Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { inject, observer } from 'mobx-react'
import ErrorComponent from '../ErrorComponent/Error';




function TableRow({rowData, wordsStore}) {
  const { id, english, transcription, russian} = rowData;

  const {deleteWord, updateWord} = wordsStore;

  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({
    id,
    english,
    transcription,
    russian,
  });
  
  // валидация
  const [errors, setErrors] =useState({
    english: false,
    transcription:false,
    russian:false,
    serverError: null
  })

   // метод для сброса ошибки
      const clearError = () => {
         setErrors(errors => ({ ...errors, serverError: null }))
      }

  const disabledBtn = Object.values(errors).some((item) => item)

  // закрытие формы редактирования
  function handleClose() {
    setIsSelected(!isSelected);
    setValue({ ...rowData });
  }
  
  const handleUpdateWord = async (updatedWord) => {
    try {
      await updateWord(updatedWord);
    } catch (error) {
      console.error('Error while updating word:', error);
      setErrors(errors => ({
        ...errors,
        serverError: 'Произошла ошибка при запросе на сервер'
      }));
    }
  };
  

// сохранение отредактированной формы
  function handleCheck() {
    if(value.english.match(/[а-яА-ЯёЁ]/g) ) {
      setErrors({...errors, english: "use English letters"})
    } else if(value.transcription.match(/[а-яА-ЯёЁ]/g)) {
      setErrors({...errors, transcription: "use English letters"})
    } else if(value.russian.match(/[a-zA-Z]/g)) {
      setErrors({...errors, russian: "use Russian letters"})
    } else {
    setValue({...value});
    setIsSelected(!isSelected);
    console.log(Object.values(value))
    }
  }

  async function handleSave() {
    try {
      await handleUpdateWord(value);
      handleCheck();
    } catch (error) {
      setErrors(errors => ({
        ...errors,
        serverError: 'Произошла ошибка при запросе на сервер'
      }));
    }
  }



  // изменение слов
  function handleEdit() {
    setIsSelected(!isSelected);
  }

  // редактирование полей
  function handleChange(event) {
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
    // валидация на пустую строку
    setErrors({...errors, [event.target.name] : event.target.value.trim() === "" ? true: false})
  }



  // удаление слова
  const handleDeleteWord = async (id) => {
    try {
      await deleteWord(id);
    } catch (error) {
      console.error('Error while deleting word:', error);
      setErrors(errors => ({
        ...errors,
        serverError: 'Произошла ошибка при запросе на сервер'
      }));
    }
  };

  return isSelected ? (
   
    <tr>     
        <td>{id}</td>
    

      <td>
        <input 
          className={errors.english ? `${styles.border_error} ${styles.tableRowInput}` : styles.tableRowInput}
          type='text'
          value={value.english}
          name={'english'}
          onChange={handleChange}
        />
        <p className={styles.error_text}>{errors.english && errors.english}</p>
      </td>

      <td>
        <input
          className={errors.transcription? `${styles.border_error} ${styles.tableRowInput}` : styles.tableRowInput}
          type='text'
          value={value.transcription}
          name={'transcription'}
          onChange={handleChange}
        />
        <p className={styles.error_text}>{errors.transcription && errors.transcription}</p>
      </td>

      <td>
        <input
          className={errors.russian? `${styles.border_error} ${styles.tableRowInput}` : styles.tableRowInput}
          type='text'
          value={value.russian}
          name={'russian'}
          onChange={handleChange}
        />
        <p className={styles.error_text}>{errors.russian && errors.russian}</p>

      </td>


        <td>
            <Button
            icon = {<FontAwesomeIcon icon={faCheck} size='lg' />}
            className={ButtonStyles.buttonOk}
            onClick={handleSave}
            disabled={disabledBtn}/>
            {errors.serverError && <ErrorComponent error = {errors.serverError} clearError={() => setErrors(clearError)} />} 
            <Button
            className={ButtonStyles.buttonCansel}
            icon={<FontAwesomeIcon icon={faXmark} size='lg'/>}
            onClick={handleClose}/>
        </td>

    </tr>
  ) : (
    <tr>
      <td>{id}</td>
      <td>{value.english}</td>
      <td>{value.transcription}</td>
      <td>{value.russian}</td>
      <td>
        <td>
          <Button
          onClick={handleEdit}
          icon={<FontAwesomeIcon icon={faPen} />}
          className={ButtonStyles.buttonEdit}
          tooltip='Подсказка при наведении'
          />
          <Button
          icon={<FontAwesomeIcon icon={faTrashCan}/>}
          className={ButtonStyles.buttonDelete}
          onClick={() => handleDeleteWord(id)}
          />
          {/* {{errors.serverError && <ErrorComponent error={errors.serverError} clearError={() => setErrors(clearError)} />}} */}
        </td>
      </td>
    </tr>
  )
}

export default inject('wordsStore')(observer(TableRow)); 