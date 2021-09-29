import React from 'react'
import styles from "./Feed.module.css"
import { IoText } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { ImVideoCamera } from "react-icons/im";
import { HiLink } from "react-icons/hi";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

const Feed = () => {
    return (
        <div className={styles.main1}>
                <div className={styles.main}>
                <div className={styles.left}>
                        <div className={styles.diff}>
                            <img src="download.png" alt="" />
                        </div>
                    <div className={styles.icons}>
                        <div>
                            <IoText className={styles.hover1}/>
                            <p>Text</p>
                        </div>
                        <div>
                            <FaCameraRetro className={styles.hover1} color= "#f73c1b"/>
                            <p>Photo</p>
                        </div>
                        <div>
                            <ImQuotesLeft className={styles.hover1} color= '#ff8800'/>
                            <p>Quote</p>
                        </div>
                        <div>
                            <HiLink className={styles.hover1} color= '#51cc18'/>
                            <p>Link</p>
                        </div>
                        <div>
                            <IoChatboxEllipsesSharp className={styles.hover1} color= '#29b9f2'/>
                            <p>Chat</p>
                        </div>
                        <div>
                            <FaHeadphonesAlt className={styles.hover1} color= '#2152d9'/>
                            <p>Audio</p>
                        </div>
                        <div>
                            <ImVideoCamera className={styles.hover1} color= '#f558c1'/>
                            <p>Video</p>
                        </div>
                    </div>

                    <div className={styles.blog} >
                        <div className={styles.diff1}>
                            <img src="download (1).png" alt="" />
                        </div>
                        <br />
                        <p>action</p>
                        <img src="https://assets.tumblr.com/pop/src/assets/images/about-tumblr/dash_post_01-5eb7ca64.jpg" alt="" width="100%"/>
                        <img src="https://assets.tumblr.com/pop/src/assets/images/about-tumblr/dash_post_01-5eb7ca64.jpg" alt="" width="100%"/>
                        <img src="https://assets.tumblr.com/pop/src/assets/images/about-tumblr/dash_post_01-5eb7ca64.jpg" alt="" width="100%"/>
                        <img src="https://assets.tumblr.com/pop/src/assets/images/about-tumblr/dash_post_01-5eb7ca64.jpg" alt="" width="100%"/>
                        <img src="https://assets.tumblr.com/pop/src/assets/images/about-tumblr/dash_post_01-5eb7ca64.jpg" alt="" width="100%"/>
                        <img src="https://assets.tumblr.com/pop/src/assets/images/about-tumblr/dash_post_01-5eb7ca64.jpg" alt="" width="100%"/>
                        <img src="https://assets.tumblr.com/pop/src/assets/images/about-tumblr/dash_post_01-5eb7ca64.jpg" alt="" width="100%"/>
                        <img src="https://assets.tumblr.com/pop/src/assets/images/about-tumblr/dash_post_01-5eb7ca64.jpg" alt="" width="100%"/>
                    </div>
                </div>

                <div className={styles.right}>
                    <h1 >You already know how this works.</h1>
                    <p>Once you follow a blog, all of its posts show up in your dashboard, just like you’d expect. See something great? Reblog it to your own blog. Add commentary if you like. Make it your own. Other people will do the same to your posts. That’s how you meet people here.</p>
                </div>
                </div>
        </div>
    )
}

export default Feed
