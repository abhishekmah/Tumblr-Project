import React from 'react';
import styles from './sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebarM}>
            <ul>
                <li>
                    <div className={styles.sidebar_info}>
                        <div className={styles.sidebar_infoT}>
                            <p style={{ fontSize: 17 }}>AbhishekMahato</p>
                            <p style={{ fontSize: 20 }}>untitled</p>
                        </div>
                    </div>
                </li>
                <li>
                    <p className={styles.sidebar_cont2H}>Posts</p>
                </li>
                <li>
                    <p className={styles.sidebar_cont2H}>Followers</p>
                </li>

                <li>
                    <p className={styles.sidebar_cont2H}>Activity</p>
                </li>

                <li>
                    <p className={styles.sidebar_cont2H}>Drafts</p>
                </li>
                <li>
                    <p className={styles.sidebar_cont2H}>Queue</p>
                </li>

                <li>
                    <p className={styles.sidebar_cont2H}>Edit Appearance</p>
                </li>

                <li>
                    <p className={styles.sidebar_cont2H}>Mass Post Editor</p>
                </li>
            </ul>
        </div>
    );
}
