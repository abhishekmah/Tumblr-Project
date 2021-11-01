import React, { useContext, useState } from 'react';
import styles from './TextPost.module.css';
import { IoIosSettings } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router';
import { ContextApi } from '../../components/ContextApi/ContextApiProvider';

const TextPost = ({ handleClose }) => {
    const history = useHistory();

    const { handleCreatePostApi, currUser } = useContext(ContextApi);
    const [createPost, setCreatePost] = useState({
        title: '',
        description: '',
        tags: [],
        images: [],
    });
    const [tags, setTags] = useState('');
    const handleCreatePost = (e) => {
        let { name, value } = e.target;
        setCreatePost({ ...createPost, [name]: value });
    };

    const handleSetTags = (e) => {
        let { name, value } = e.target;
        setTags(value);
    };
    const handleSubmitPost = () => {
        if (
            createPost.title.length === 0 ||
            createPost.description.length === 0
        )
            return;
        let newTags = tags
            .trim()
            .split('#')
            .map((el) => el.trim());
        newTags = newTags.filter((tag) => tag !== '');
        let payload = {
            ...createPost,
            tags: newTags,
        };

        handleCreatePostApi(payload, handleClose);
    };

    return (
        <div className={styles.main}>
            <div className={styles.textDiv}>
                <div className={styles.diff}>
                    <img
                        src={
                            currUser?.avatar?.length > 0
                                ? currUser.avatar
                                : 'download.png'
                        }
                        alt=""
                    />
                </div>
                <div className={styles.top}>
                    <div className={styles.left}>{currUser?.blog_name}</div>
                    <div className={styles.right}>
                        <IoIosSettings
                            style={{
                                color: 'rgb(116, 114, 114)',
                                fontSize: 22,
                            }}
                        />
                    </div>
                </div>
                <div className={styles.inputFields}>
                    <TextField
                        name="title"
                        id="filled-textarea"
                        placeholder="Title"
                        multiline
                        variant="standard"
                        onChange={handleCreatePost}
                        InputProps={{
                            style: { fontSize: '40px', color: 'black' },
                            disableUnderline: true,
                        }}
                    />
                    <TextField
                        name="description"
                        id="filled-textarea"
                        placeholder="Your text here"
                        minRows={4}
                        onChange={handleCreatePost}
                        multiline
                        variant="standard"
                        InputProps={{
                            style: { fontSize: '14px', color: 'black' },
                            disableUnderline: true, // <== added this
                        }}
                    />
                    <TextField
                        name="tags"
                        id="filled-textarea"
                        placeholder="#tags"
                        minRows={2}
                        multiline
                        onChange={handleSetTags}
                        variant="standard"
                        InputProps={{
                            style: { fontSize: '12px', color: 'black' },
                            disableUnderline: true, // <== added this
                        }}
                    />
                </div>
                {/* <div>
                    <p><input type="text" placeholder="Description" /></p>
                </div>
                <div>
                    <p><input type="text" placeholder="#tag" /></p>
                </div> */}
                <div className={styles.top1}>
                    <div className={styles.left1}>
                        <button
                            onClick={handleClose}
                            style={{
                                width: '60px',
                                height: '30px',
                                backgroundColor: 'rgb(116, 114, 114)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '2px',
                            }}
                        >
                            Close
                        </button>
                    </div>
                    <div className={styles.right1}>
                        <button
                            onClick={handleSubmitPost}
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

export default TextPost;
