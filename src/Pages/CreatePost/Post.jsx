import React from 'react';
import styles from './Post.module.css';
import { IoText } from 'react-icons/io5';
import { FaCameraRetro } from 'react-icons/fa';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { ImQuotesLeft } from 'react-icons/im';
import { ImVideoCamera } from 'react-icons/im';
import { HiLink } from 'react-icons/hi';
import { IoChatboxEllipsesSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { y: -300, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const Post = () => {
    return (
        <div className={styles.main}>
            <motion.div
                className={styles.icons}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    variants={item}
                    style={{ backgroundColor: 'white' }}
                >
                    <IoText className={styles.hover} />
                    <br />
                    <br />
                    <p>Text</p>
                </motion.div>
                <motion.div
                    variants={item}
                    style={{ backgroundColor: '#f73c1b' }}
                >
                    <FaCameraRetro className={styles.hover} />
                    <br />
                    <br />
                    <p>Photo</p>
                </motion.div>
                <motion.div
                    variants={item}
                    style={{ backgroundColor: '#ff8800' }}
                >
                    <ImQuotesLeft className={styles.hover} />
                    <br />
                    <br />
                    <p>Quote</p>
                </motion.div>
                <motion.div
                    variants={item}
                    style={{ backgroundColor: '#51cc18' }}
                >
                    <HiLink className={styles.hover} />
                    <br />
                    <br />
                    <p>Link</p>
                </motion.div>
                <motion.div
                    variants={item}
                    style={{ backgroundColor: '#29b9f2' }}
                >
                    <IoChatboxEllipsesSharp className={styles.hover} />
                    <br />
                    <br />
                    <p>Chat</p>
                </motion.div>
                <motion.div
                    variants={item}
                    style={{ backgroundColor: '#2152d9' }}
                >
                    <FaHeadphonesAlt className={styles.hover} />
                    <br />
                    <br />
                    <p>Audio</p>
                </motion.div>
                <motion.div
                    variants={item}
                    style={{ backgroundColor: '#f558c1' }}
                >
                    <ImVideoCamera className={styles.hover} />
                    <br />
                    <br />
                    <p>Video</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Post;
