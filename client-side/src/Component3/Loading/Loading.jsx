import React from 'react'
import styles from "./loading.module.css"

export default function Loading() {
    return (
        <div className={styles.loading}>
            <div className={styles.gifdiv}>
                <img src="Load.gif" alt="" />
            </div>
        </div>
    )
}
