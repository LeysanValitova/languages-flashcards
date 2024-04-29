import React from 'react'
import styles from './Missing.module.css'



function Missing() {
  return (
    <div className={styles.missing}>
        <div className={styles.missingContent}>

        <div className={styles.missingTitle}>
            404
        </div>
        <div className={styles.missingSubtitle}>
            Page not found
        </div>
        <p className={styles.missingText}>
            We don't have such a page...
            <p className={styles.missingTextXl}>
            For that there are others!
            </p>
        </p>
        </div>
            <div className={styles.missingImgBox}>
                <img className={styles.missingImg} src="/images/dog2.png" alt="dog" />
            </div>
           
    </div>
  )
}

export default Missing