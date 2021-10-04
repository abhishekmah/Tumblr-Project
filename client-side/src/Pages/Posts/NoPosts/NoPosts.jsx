import React from 'react';
import styles from './NoPosts.module.css';

export default function NoPosts() {
    return (
        <div className={styles.main}>
            <img src="Loading.png" alt="" />
        </div>
    );
}
