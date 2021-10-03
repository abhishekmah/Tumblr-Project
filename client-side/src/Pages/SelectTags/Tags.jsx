import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { ContextApi } from '../../components/ContextApi/ContextApiProvider';
import styles from './Tags.module.css';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: .5,
            staggerChildren: .1,
        },
    },
};

const item = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const color = [
    '#66a8cf',
    '#af8cc6',
    '#f1a24f',
    '#6ac296',
    '#af8cc6',
    '#66a8cf',
    '#af8cc6',
    '#f1a24f',
    '#6ac296',
    '#af8cc6',
    '#66a8cf',
    '#af8cc6',
    '#f1a24f',
    '#6ac296',
    '#af8cc6',
    '#66a8cf',
    '#af8cc6',
    '#f1a24f',
    '#6ac296',
    '#af8cc6',
];
let tag_ids = [];

const Tags = () => {
    const history = useHistory();
    const { handleGetTags, handleUserInterests } = useContext(ContextApi);
    const [tags, setTags] = useState(false);
    if (!tags) handleGetTags(setTags);

    // console.log(tags.tags[0].followers,'tags')
    const [selectedTag, setSelectedTag] = useState(['', '', '', '', '']);

    const handleSelect = (e) => {
        if (selectedTag[4] !== '') {
            setSelectedTag([...selectedTag, e]);
            return;
        }
        var arr = [...selectedTag];

        selectedTag.map((el, i) => {
            if (el === '') {
                arr[i] = e;
                setSelectedTag([...arr]);
                e = '';
            }
        });
    };

    return (
        <div className={styles.main}>
            <div className={styles.navbar}>
                <div className={styles.left}>
                    {selectedTag.map((el, i) => {
                        return (
                            <div
                                style={{
                                    backgroundColor: `${
                                        el === '' ? 'none' : color[i]
                                    }`,
                                    border: `${
                                        el === ''
                                            ? 'dashed 0.5px rgb(158, 157, 157)'
                                            : 'none'
                                    }`,
                                }}
                            >
                                {el}
                            </div>
                        );
                    })}
                </div>
                <div className={styles.right}>
                    <div>Skip</div>
                    <div
                        onClick={() => {
                            handleUserInterests(tag_ids, history);
                        }}
                    >
                        Select
                    </div>
                </div>
            </div>
            <hr />
            <motion.div
                className={styles.boxes}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={item} className={styles.left1}>
                    <div>
                        <h1>What're you into?</h1>
                        <p>
                            Tell us what you like and we'll get you the good
                            stuff.
                        </p>
                    </div>
                </motion.div>

                <div className={styles.right1}>
                    {tags &&
                        tags.map((el) => {
                            return (
                                <motion.div
                                    variants={item}
                                    className={styles.tagBox}
                                    onClick={() => {
                                        tag_ids.push(el._id);
                                        handleSelect(el.tag);
                                    }}
                                >
                                    <img src={el.avatar} alt="" />
                                    <p>{el.tag}</p>
                                </motion.div>
                            );
                        })}
                </div>
            </motion.div>
        </div>
    );
};

export default Tags;
