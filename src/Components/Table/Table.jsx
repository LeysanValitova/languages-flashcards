import React, { useEffect } from 'react'
import styles from './Table.module.css'
import TableRow from '../TableRow/TableRow'
import { inject, observer } from 'mobx-react'



 function Table({wordsStore}) {
  const {words, isLoaded, loadData} = wordsStore;

  useEffect(() => {
    loadData();
  }, [loadData]);

   if (!isLoaded) { return <div>Loading...</div>;}
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
            {words.map((word)=> (
            <TableRow rowData={word} key={word.id} />))}
        </tbody>
    </table>
  )
}

export default inject('wordsStore')(observer(Table));