
import React from 'react'
import Sign from '../Sign/Sign'
import styles from "./lower.module.css"

export default function Lower() {
    return (
        <div className={styles.lower} id={styles.slido}>
            <div className={styles.lower_info}>
                <h1>Okay, it’s not actually hard to explain.</h1>
                <p>We lied. But now you understand this thing. So come on in.</p>

                <Sign/>
            </div>
        </div>
    )
}
