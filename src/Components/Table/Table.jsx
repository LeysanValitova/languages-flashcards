import React, { useEffect, useRef } from 'react'
import styles from './Table.module.css'
import TableRow from '../TableRow/TableRow'
import { inject, observer } from 'mobx-react'
import ErrorComponent from '../ErrorComponent/Error';


function Table({ wordsStore }) {
  const { words, loadData, error, setError, clearError } = wordsStore;
  const isLoaded = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await loadData();
        isLoaded.current = true;
      } catch (error) {
        setError('Failed to load data from the server');
        isLoaded.current = true;
      }
    };

    fetchData();
  }, [loadData, setError]);

  if (!isLoaded.current) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {error && <ErrorComponent error={error} clearError={clearError} />}
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
          {words.map((word) => (
            <TableRow rowData={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default inject('wordsStore')(observer(Table));