import React from 'react'
import styles from './Table.module.css'
import TableRow from '../TableRow/TableRow'

function Table() {
  return (
    <table className={styles.table_container}>
        <thead className={styles.table_nav}>
            <tr>
                <th>№</th>
                <th>English</th>
                <th>Transcription</th>
                <th>Translation</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.map((word)=> (
            <TableRow rowData={word} key={word.id} />))}
        </tbody>
    </table>
  )
}

export default Table