import React from 'react';
import styles from './Post.module.css';
import { IoText } from 'react-icons/io5';
import { FaCameraRetro } from 'react-icons/fa';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { ImQuotesLeft } from 'react-icons/im';
import { ImVideoCamera } from 'react-icons/im';
import { HiLink } from 'react-icons/hi';
import { IoChatboxEllipsesSharp } from 'react-icons/io5';

const Post = () => {
    return (
        <div className={styles.main}>
            <div className={styles.icons}>
                <div style={{ backgroundColor: 'white' }}>
                    <IoText className={styles.hover} />
                    <br />
                    <br />
                    <p>Text</p>
                </div>
                <div style={{ backgroundColor: '#f73c1b' }}>
                    <FaCameraRetro className={styles.hover} />
                    <br />
                    <br />
                    <p>Photo</p>
                </div>
                <div style={{ backgroundColor: '#ff8800' }}>
                    <ImQuotesLeft className={styles.hover} />
                    <br />
                    <br />
                    <p>Quote</p>
                </div>
                <div style={{ backgroundColor: '#51cc18' }}>
                    <HiLink className={styles.hover} />
                    <br />
                    <br />
                    <p>Link</p>
                </div>
                <div style={{ backgroundColor: '#29b9f2' }}>
                    <IoChatboxEllipsesSharp className={styles.hover} />
                    <br />
                    <br />
                    <p>Chat</p>
                </div>
                <div style={{ backgroundColor: '#2152d9' }}>
                    <FaHeadphonesAlt className={styles.hover} />
                    <br />
                    <br />
                    <p>Audio</p>
                </div>
                <div style={{ backgroundColor: '#f558c1' }}>
                    <ImVideoCamera className={styles.hover} />
                    <br />
                    <br />
                    <p>Video</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
