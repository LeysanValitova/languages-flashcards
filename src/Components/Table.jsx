import React from 'react'
import styles from './Table.module.css'
import data from '../data'
import TableRow from './TableRow'

function Table() {
  return (
    <table className={styles.table_container}>
        <thead className={styles.table_nav}>
            <tr>
                <th>№</th>
                <th>Имя</th>
                <th>Город</th>
                <th>Профессия</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            {data.map((person)=> (
            <TableRow key={person.id} {...person}/>))}
        </tbody>
    </table>
  )
}

export default Table