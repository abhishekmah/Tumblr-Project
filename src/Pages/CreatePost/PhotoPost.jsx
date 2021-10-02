import React from 'react';
import styles from './PhotoPost.module.css';
import { IoIosSettings } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { MdAddAPhoto } from 'react-icons/md';
import { AiFillFileAdd } from 'react-icons/ai';

const Post = () => {
    return (
        <div className={styles.main}>
            <div className={styles.diff}>
                <img src="download.png" alt="" />
            </div>
            <div className={styles.textDiv}>
                <div className={styles.top}>
                    <div className={styles.left}>Abhishek</div>
                    <div className={styles.right}>
                        <IoIosSettings
                            style={{
                                color: 'rgb(116, 114, 114)',
                                fontSize: 22,
                            }}
                        />
                    </div>
                </div>
                <div className={styles.top2}>
                    <div className={styles.left2}>
                        <MdAddAPhoto style={{ marginTop: 30 }} />
                        <p>Upload photos</p>
                    </div>
                    <hr />
                    <div className={styles.right2}>
                        <AiFillFileAdd style={{ marginTop: 30 }} />
                        <p>Add photo from web</p>
                    </div>
                </div>

                <div className={styles.top1}>
                    <div className={styles.left1}>
                        <button
                            style={{
                                width: '60px',
                                height: '30px',
                                color: 'white',
                                border: 'none',
                                borderRadius: '2px',
                                backgroundColor: 'rgb(116, 114, 114)',
                            }}
                        >
                            Close
                        </button>
                    </div>
                    <div className={styles.right1}>
                        <button
                            style={{
                                width: '70px',
                                height: '30px',
                                backgroundColor: 'rgb(0, 184, 255)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '2px',
                            }}
                        >
                            Post
                        </button>
                        {/* <IoIosArrowDown
                            style={{
                                color: 'rgb(116, 114, 114)',
                                fontSize: 22,
                            }}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
