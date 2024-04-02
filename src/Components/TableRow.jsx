import React from 'react'
import ButtonEdit from './ButtonEdit'
import ButtonDelete from './ButtonDelete'


function TableRow({id, name, city, profession}) {
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{city}</td>
        <td>{profession}</td>
        <td>
            <ButtonEdit/>
            <ButtonDelete/>
        </td>

    </tr>
  )
}

export default TableRow