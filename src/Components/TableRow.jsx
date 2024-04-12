import React from 'react'
// import ButtonEdit from './ButtonEdit'
// import ButtonDelete from './ButtonDelete'
import { useState } from 'react';


function TableRow({rowData}) {
  const { id, name, city, profession} = rowData;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({
    id,
    name,
    city,
    profession,
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

      <td>
        <td>{id}</td>
      </td>

      <td>
        <input
          type='text'
          value={value.name}
          name={'name'}
          onChange={handleChange}
        />
      </td>

      <td>
        <input
          type='text'
          value={value.city}
          name={'city'}
          onChange={handleChange}
        />
      </td>

      <td>
        <input
          type='text'
          value={value.profession}
          name={'profession'}
          onChange={handleChange}
        />
      </td>


        <td>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleClose}>Close</button>
        </td>

    </tr>
  ) : (
    <tr>
      <td>{id}</td>
      <td>{value.name}</td>
      <td>{value.city}</td>
      <td>{value.profession}</td>
      <td>
        <td>
          <button onClick={handleEdit}>Edit</button>
          <button>Delete</button>
        </td>
      </td>
    </tr>
  )
}

export default TableRow