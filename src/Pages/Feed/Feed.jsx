import React from 'react'
import styles from "./Feed.module.css"
import { IoText } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { ImVideoCamera } from "react-icons/im";
import { HiLink } from "react-icons/hi";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegComments } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { TiHeartOutline } from "react-icons/ti";

const data = [
    {
        "title": "AbhishekBlog",
        "desc": "they go around broadcasting early 2000s Top Billboard Hits into the minds of innocent bystanders. every time you get a Coldplay song stuck in your head for no reason, that's why",
        "image": [],
        "tags": [{"_id": 123, "tag": "fashion"},{"_id": 12, "tag": "sports"},{"_id": 1234, "tag": "movies"},{"_id": 1235, "tag": "actor"}],
        "likedBy": [{"userName": "abhi", "userId": "007"},{"userName": "abhi", "userId": "007"},{"userName": "abhi", "userId": "007"},{"userName": "abhi", "userId": "007"},],
        "userId": {"userName": "jeet", "avatarUrl": "https://64.media.tumblr.com/avatar_82a7d02b6c7b_64.pnj"}
    },
    {
        "title": "AbhishekBlog",
        "desc": "last week, i went to a psychiatrist because i haven’t been feeling well. i have trouble focusing, i’m more forgetful than usual, and my sleep schedule is a mess. i wanted to get help because it’s affecting my studies and daily life. i suspected i had adhd bc i identified with the symptoms",
        "image": ["https://64.media.tumblr.com/919fc5df73898a339a71ce7218f7af1d/tumblr_pfq1ajzO8A1vtbsr8o3_250.png","https://64.media.tumblr.com/f380f7eb62d0206e1730a22e51d4969d/tumblr_pfq1ajzO8A1vtbsr8o8_250.png","https://64.media.tumblr.com/14181ad4e87f87aa9b9df017371954c7/tumblr_pfq1ajzO8A1vtbsr8o5_250.png","https://64.media.tumblr.com/50274ea81f3b7aa3a3a1224cf1a9f0dd/tumblr_pfq1ajzO8A1vtbsr8o6_250.png"],
        "tags": [{"_id": 123, "tag": "fashion"},{"_id": 12, "tag": "sports"},{"_id": 1234, "tag": "movies"},],
        "likedBy": [{"userName": "abhi", "userId": "007"},{"userName": "abhi", "userId": "007"},{"userName": "abhi", "userId": "007"},],
        "userId": {"userName": "Shahrukh Khan", "avatarUrl": "https://64.media.tumblr.com/d4492eaba605defbde742516808f5115/5380e3da7cfa939c-52/s64x64u_c1/d6d2750be16811526c81ef0623b5b536ed2f2d09.pnj"}
    },
    {
        "title": "AbhishekBlog",
        "desc": "so i talked to the psychiatrist about that,, but while i was answering her questions i realized the problem was with my mother,, that i’ve been scared and anxious about her. i didn’t answer questions about her truthfully and only said half-truths because i was in denial about my mother,, and i felt like i was betraying her by labeling her as the cause of my problems.",
        "image": ["https://64.media.tumblr.com/f71e890cf4981ba4d87d2d0c5dfda9cf/f3806f9534931f52-6b/s250x400/d159a7945aad3bf54c1050564712814e9ee37e6a.gifv","https://64.media.tumblr.com/a8dc8c17c813cba0d098578c605cbbb8/f3806f9534931f52-2e/s250x400/ae2807e2010b64a1ce2509ff705a83b98f4009f2.gifv","https://64.media.tumblr.com/44963fa2535b3d32fdb543f7268ff884/f3806f9534931f52-df/s250x400/a777e2f71eb6aa37b952543944878641d7434b66.gifv"],
        "tags": [{"_id": 123, "tag": "fashion"},{"_id": 12, "tag": "sports"},{"_id": 1234, "tag": "movies"},{"_id": 1235, "tag": "actor"}],
        "likedBy": [{"userName": "abhi", "userId": "007"},{"userName": "abhi", "userId": "007"},{"userName": "abhi", "userId": "007"},{"userName": "abhi", "userId": "007"},],
        "userId": {"userName": "jeet", "avatarUrl": "https://64.media.tumblr.com/avatar_82a7d02b6c7b_64.pnj"}
    },
]

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

                    {data.map((el) => 
                        <div className={styles.blog} >
                            <div className={styles.diff1}>
                                <img src={el.userId.avatarUrl} alt="" />
                            </div>
                            <br />
                            <p>{el.userId.userName}<span className={styles.cont2_infoF1}>Follow</span></p>
                            {el.image.map((i) => 
                                <img src={i} alt="" width="100%"/>
                            )}
                            <div className={styles.desc}>
                                <p style={{fontWeight: "bold", textAlign: "left"}}>{el.title}</p>
                                <p style={{textAlign: "left"}}>{el.desc}</p>
                            </div>
                            <span className={styles.cont2_infoFgreen}>Recommended</span>
                            <div className={styles.iconsBottom}>
                            <span className={styles.cont2_infoFlast}>{el.likedBy.length} Likes</span>
                            <div>
                                <RiShareForwardLine className={styles.icon}/>
                                <FaRegComments className={styles.icon}/>
                                <BiRepost className={styles.icon}/>
                                <TiHeartOutline className={styles.icon}/>
                            </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.rt_cont2}>
                        <div className={styles.rt_cont2H}>Check out these blogs</div>
                        <ul>
                            <li>
                            <div className={styles.cont2_info}>
                                <div className={styles.cont2_infoIm}>
                                <img
                                    src="https://64.media.tumblr.com/avatar_21ff1192fe2f_64.pnj"
                                    alt=""
                                />
                                </div>
                                <div className={styles.cont2_infoT}>
                                <span>thecollectibles</span>
                                <div>The Art Showcase</div>
                                </div>
                            </div>
                            <div className={styles.cont2_infoF}>Follow</div>
                            </li>

                            <li>
                            <div className={styles.cont2_info}>
                                <div className={styles.cont2_infoIm}>
                                <img
                                    src="https://64.media.tumblr.com/avatar_21ff1192fe2f_64.pnj"
                                    alt=""
                                />
                                </div>
                                <div className={styles.cont2_infoT}>
                                <span>thecollectibles</span>
                                <div>The Art Showcase</div>
                                </div>
                            </div>
                            <div className={styles.cont2_infoF}>Follow</div>
                            </li>

                            <li>
                            <div className={styles.cont2_info}>
                                <div className={styles.cont2_infoIm}>
                                <img
                                    src="https://64.media.tumblr.com/avatar_21ff1192fe2f_64.pnj"
                                    alt=""
                                />
                                </div>
                                <div className={styles.cont2_infoT}>
                                <span>thecollectibles</span>
                                <div>The Art Showcase</div>
                                </div>
                            </div>
                            <div className={styles.cont2_infoF}>Follow</div>
                            </li>

                            <li>
                            <div className={styles.cont2_info}>
                                <div className={styles.cont2_infoIm}>
                                <img
                                    src="https://64.media.tumblr.com/avatar_21ff1192fe2f_64.pnj"
                                    alt=""
                                />
                                </div>
                                <div className={styles.cont2_infoT}>
                                <span>thecollectibles</span>
                                <div>The Art Showcase</div>
                                </div>
                            </div>
                            <div className={styles.cont2_infoF}>Follow</div>
                            </li>
                        <a href="" style={{color: "rgb(0, 184, 255)", fontSize: 17, marginTop: 80, textDecoration: "none"}}>Explore all of Tumblr</a>
                        </ul>
                </div>
                </div>
        </div>
    )
}

export default Feed
