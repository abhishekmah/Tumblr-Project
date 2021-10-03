import React from 'react'
import styles from "./explore.module.css";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { BiRepost } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
const arr = [
  {
    title: "AbhishekBlog",
    description:
      "they go around broadcasting early 2000s Top Billboard Hits into the minds of innocent bystanders. every time you get a Coldplay song stuck in your head for no reason, that's why",
    images: [],
    tags: [
      { _id: 123, tag: "fashion" },
      { _id: 12, tag: "sports" },
      { _id: 1234, tag: "movies" },
      { _id: 1235, tag: "actor" },
    ],
    likedby: [
      { userName: "abhi", userId: "007" },
      { userName: "abhi", userId: "007" },
      { userName: "abhi", userId: "007" },
      { userName: "abhi", userId: "007" },
    ],
    user_id: {
      blog_name: "jeet",
    },
  },
  {
    title: "AbhishekBlog",
    description:
      "last week, i went to a psychiatrist because i haven’t been feeling well. i have trouble focusing, i’m more forgetful than usual, and my sleep schedule is a mess. i wanted to get help because it’s affecting my studies and daily life. i suspected i had adhd bc i identified with the symptoms",
    images: [
      "https://64.media.tumblr.com/919fc5df73898a339a71ce7218f7af1d/tumblr_pfq1ajzO8A1vtbsr8o3_250.png",
      "https://64.media.tumblr.com/f380f7eb62d0206e1730a22e51d4969d/tumblr_pfq1ajzO8A1vtbsr8o8_250.png",
      "https://64.media.tumblr.com/14181ad4e87f87aa9b9df017371954c7/tumblr_pfq1ajzO8A1vtbsr8o5_250.png",
      "https://64.media.tumblr.com/50274ea81f3b7aa3a3a1224cf1a9f0dd/tumblr_pfq1ajzO8A1vtbsr8o6_250.png",
    ],
    tags: [
      { _id: 123, tag: "fashion" },
      { _id: 12, tag: "sports" },
      { _id: 1234, tag: "movies" },
    ],
    likedby: [
      { userName: "abhi", userId: "007" },
      { userName: "abhi", userId: "007" },
      { userName: "abhi", userId: "007" },
    ],
    user_id: {
      blog_name: "Shahrukh Khan",
      avatar: "",
    },
  },
  {
    title: "AbhishekBlog",
    description:
      "so i talked to the psychiatrist about that,, but while i was answering her questions i realized the problem was with my mother,, that i’ve been scared and anxious about her. i didn’t answer questions about her truthfully and only said half-truths because i was in denial about my mother,, and i felt like i was betraying her by labeling her as the cause of my problems.",
    images: [
     "https://64.media.tumblr.com/919fc5df73898a339a71ce7218f7af1d/tumblr_pfq1ajzO8A1vtbsr8o3_250.png",
      "https://64.media.tumblr.com/f380f7eb62d0206e1730a22e51d4969d/tumblr_pfq1ajzO8A1vtbsr8o8_250.png",
      "https://64.media.tumblr.com/14181ad4e87f87aa9b9df017371954c7/tumblr_pfq1ajzO8A1vtbsr8o5_250.png",
     
    ],
    tags: [
      { _id: 123, tag: "fashion" },
      { _id: 12, tag: "sports" },
      { _id: 1234, tag: "movies" },
      { _id: 1235, tag: "actor" },
      { _id: 125, tag: "story" },
      { _id: 235, tag: "royal" },
    ],
    likedby: [
      { userName: "abhi", userId: "007" },
      { userName: "abhi", userId: "007" },
      { userName: "abhi", userId: "007" },
      { userName: "abhi", userId: "007" },
    ],
    user_id: {
      blog_name: "jeet",
      avatar: "https://64.media.tumblr.com/avatar_82a7d02b6c7b_64.pnj",
    },
  },
];

export default function Article3({arr3}) {
    return (
      <div>
        {arr3.map((el, i) => {
          return (
             <div key={el.id} className={styles.article}>
                  <div className={styles.article_head}>
                    <div className={styles.article_headC}>
                      <div className={styles.article_headI}>
                        <img
                          src={
                        !el.user_id.avatar || !el.user_id.avatar.length
                          ? `https://picsum.photos/50?random=${i}`
                          : el.user_id.avatar
                      }
                          alt=""
                        />
                      </div>
                      <div className={styles.article_headH}>
                        {el.user_id.blog_name} <span> Follow</span>
                      </div>
                    </div>
                    <div className={styles.art_ic}>
                      <BsThreeDots />
                    </div>
              </div>
              
              <div className={el.images.length % 2 ===0  && el.images.length>1  ? `${styles.ex_grid}` : ""}>
                {el.images?.map((i) => (
                  <div className={el.images.length > 1 ? `${styles.article_mimg}`: `${ styles.article_img }` }>
                    
                    <img src={i} alt="" />
                  
                </div>
                ))}
                </div>
               {el.tags && el.tags.length > 0 &&
                <div className={styles.article_tags}>
                  {/* {el.tags} */}
                  {/* #quotes #life #words #love #emotions #poetry #writting */}
                <div>
                  <p>
                  {el.tags.map((item) => (
                    <span>#{item.tag}</span>
                  ))}
                    </p>
                  </div>
                </div>}
                  <div className={styles.article_footer}>
                    <div className={styles.footP}>{el.likedby.length} notes</div>
                    <div className={styles.footIc}>
                      <div>
                        <RiShareForwardLine />
                      </div>
                      <div>
                        <FaRegComment />
                      </div>
                      <div>
                        <BiRepost />
                      </div>
                      <div>
                        <AiOutlineHeart />
                      </div>
                    </div>
                  </div>
            </div>
            
            )})}

             {/* <div className={styles.article}>
                  <div className={styles.article_head}>
                    <div className={styles.article_headC}>
                      <div className={styles.article_headI}>
                        <img
                          src="https://64.media.tumblr.com/33b2fb72df789be6f357bda24bec391b/b610c5e97fdcd376-bd/s96x96u_c1/eb370438f867aa7c487f1b2a2493373465cf56bc.jpg"
                          alt=""
                        />
                      </div>
                      <div className={styles.article_headH}>
                        thedesire <span> Follow</span>
                      </div>
                    </div>
                    <div className={styles.art_ic}>
                      <BsThreeDots />
                    </div>
                  </div>

                  <div className={styles.article_img}>
                    <img
                      src="https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s640x960/8db6e18d9dd94bf8bdc4baeb3599e0904f84693d.jpg"
                      alt=""
                    />
                  </div>
                  <div className={styles.article_tags}>
                    #quotes #life #words #love #emotions #poetry #writting
                  </div>
                  <div className={styles.article_footer}>
                    <div className={styles.footP}>22,355 notes</div>
                    <div className={styles.footIc}>
                      <div>
                        <RiShareForwardLine />
                      </div>
                      <div>
                        <FaRegComment />
                      </div>
                      <div>
                        <BiRepost />
                      </div>
                      <div>
                        <AiOutlineHeart />
                      </div>
                    </div>
                  </div>
            </div> */}
            
        </div>
    )
}
