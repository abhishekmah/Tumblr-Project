import React,{ useEffect } from 'react';
import styles from "./HomePage2.module.css"
import { IoText } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { ImVideoCamera } from "react-icons/im";
import { HiLink } from "react-icons/hi";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const HomePage2 = () => {

    return (
        <div>
            <div className={styles.green}>
            <p>What is Tumblr?</p>
            <img src="Tlogo.png" alt="" />
            <div>
                <h1>Tumblr is so easy to use that it’s hard to explain.</h1>
                <p>We made it really, really simple for people to make a blog and put whatever they want on it. Stories, photos, GIFs, TV shows, links, quips, dumb jokes, smart jokes, Spotify tracks, mp3s, videos, fashion, art, deep stuff. Tumblr is 534 million different blogs, filled with literally whatever.</p>
                <br />
            </div>
            </div>
            <div className={styles.about}>
                <div>
                <div className={styles.text}>
                    <h1>Tumblr is blogs.</h1>
                    <p>Turns out that when you make it easy to create interesting things, that’s exactly what people do. All those great, random blogs your friends send you, those are Tumblr blogs. We’ll help you find and follow blogs like that, and we’ll help other people find and follow yours.</p>
                </div>
                <div className={styles.img}>
                    <img src="tumblrBlog.png" alt="" />
                </div>
                </div>
            </div>
            <div className={styles.blogEx}>
                <div className={styles.main}>
                <div className={styles.left}>
                    <Fade bottom>
                    <div className={styles.icons}>
                        <div className={styles.diff}>
                            <img src="download.png" alt="" />
                        </div>
                        <div>
                            <IoText className={styles.hover}/>
                            <p>Text</p>
                        </div>
                        <div>
                            <FaCameraRetro className={styles.hover} color= "#f73c1b"/>
                            <p>Photo</p>
                        </div>
                        <div>
                            <ImQuotesLeft className={styles.hover} color= '#ff8800'/>
                            <p>Quote</p>
                        </div>
                        <div>
                            <HiLink className={styles.hover} color= '#51cc18'/>
                            <p>Link</p>
                        </div>
                        <div>
                            <IoChatboxEllipsesSharp className={styles.hover} color= '#29b9f2'/>
                            <p>Chat</p>
                        </div>
                        <div>
                            <FaHeadphonesAlt className={styles.hover} color= '#2152d9'/>
                            <p>Audio</p>
                        </div>
                        <div>
                            <ImVideoCamera className={styles.hover} color= '#f558c1'/>
                            <p>Video</p>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className={styles.blog} >
                        <div className={styles.diff1}>
                            <img src="download (1).png" alt="" />
                        </div>
                        <br />
                        <p>action</p>
                        <img src="https://assets.tumblr.com/pop/src/assets/images/about-tumblr/dash_post_01-5eb7ca64.jpg" alt="" width="100%"/>
                    </div>
                    </Fade>
                </div>
                <div className={styles.right}>
                    <h1 >You already know how this works.</h1>
                    <p>Once you follow a blog, all of its posts show up in your dashboard, just like you’d expect. See something great? Reblog it to your own blog. Add commentary if you like. Make it your own. Other people will do the same to your posts. That’s how you meet people here.</p>
                </div>
                </div>
            </div>
            <div className={styles.orange}>
                <br />
                <br />
                <div className={styles.icons1}>
                        <Zoom clear>
                        <div>
                            <IoText className={styles.hover1} color= "#ff8800"/>
                            <p>Text</p>
                        </div>
                        </Zoom>
                        <Zoom clear>
                        <div>
                            <FaCameraRetro className={styles.hover1} color= "#ff8800"/>
                            <p>Photo</p>
                        </div>
                        </Zoom>
                        <Zoom clear>
                        <div>
                            <ImQuotesLeft className={styles.hover1} color= '#ff8800'/>
                            <p>Quote</p>
                        </div>
                        </Zoom>
                        <Zoom clear>
                        <div>
                            <HiLink className={styles.hover1} color= '#ff8800'/>
                            <p>Link</p>
                        </div>
                        </Zoom>
                        <Zoom clear>
                        <div>
                            <IoChatboxEllipsesSharp className={styles.hover1} color= '#ff8800'/>
                            <p>Chat</p>
                        </div>
                        </Zoom>
                        <Zoom clear>
                        <div>
                            <FaHeadphonesAlt className={styles.hover1} color= '#ff8800'/>
                            <p>Audio</p>
                        </div>
                        </Zoom>
                        <Zoom clear>
                        <div>
                            <ImVideoCamera className={styles.hover1} color= '#ff8800'/>
                            <p>Video</p>
                        </div>
                        </Zoom>
                </div>
                <div className={styles.text1}>
                    <h1>Seriously, put anything you want here.</h1>
                    <p>Seven post types to get you started. Your brain can do the rest. This thing is yours. Use it however you like.</p>
                <br />
                <br />
                <br />
                <br />
                </div>
            </div>
        </div>
    )
}

export default HomePage2
