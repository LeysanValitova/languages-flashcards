import React from 'react'
import { useState } from 'react';
import styles from './TableRow.module.css'
import Button from '../Button/Button';
import ButtonStyles from '../Button/Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'


function TableRow({rowData}) {
  const { id, english, transcription, translation} = rowData;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({
    id,
    english,
    transcription,
    translation,
  });

  function handleClose() {
    setIsSelected(!isSelected);
    setValue({ ...rowData });
  }
  function handleSave() {
    setValue({...value});
    setIsSelected(!isSelected);
  }

  function handleEdit() {
    setIsSelected(!isSelected);
  }

  function handleChange(event) {
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }


  return isSelected ? (
    <tr>

      
        <td>{id}</td>
    

      <td>
        <input 
          className={styles.tableRowInput}
          type='text'
          value={value.english}
          name={'name'}
          onChange={handleChange}
        />
      </td>

      <td>
        <input
          className={styles.tableRowInput}
          type='text'
          value={value.transcription}
          name={'city'}
          onChange={handleChange}
        />
      </td>

      <td>
        <input
          className={styles.tableRowInput}
          type='text'
          value={value.translation}
          name={'profession'}
          onChange={handleChange}
        />
      </td>


        <td>
            <Button
            icon = {<FontAwesomeIcon icon={faCheck} size='lg' />}
            className={ButtonStyles.buttonOk}
            onClick={handleSave}/>
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
      <td>{value.translation}</td>
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
          />
        </td>
      </td>
    </tr>
  )
}

export default TableRow