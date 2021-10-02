import React, { useState } from "react";
import styles from "./explore.module.css";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { RiLayoutTopFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { BiRepost } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Corocards from "./Corocards";

const data = [
  {
    "title": "thecollectibles",
    "des": "The Art Showcase",
    "image" : "https://64.media.tumblr.com/avatar_21ff1192fe2f_64.pnj"
  },
    {
    "title": "thecoll",
    "des": "The Art ",
    "image" : "https://64.media.tumblr.com/avatar_21ff1192fe2f_64.pnj"
  },
      {
    "title": "collectibles",
    "des": "The  Showcase",
    "image" : "https://64.media.tumblr.com/avatar_21ff1192fe2f_64.pnj"
  },
        {
    "title": "thecollectib",
    "des": "The Art Showcase",
    "image" : "https://64.media.tumblr.com/avatar_21ff1192fe2f_64.pnj"
  },
]

export default function Explore() {
  // const [explore, setExplore] = useState(true)
  // const handleExplore = (e) => {
  //   setExplore(!explore)
  // }
  return (
    <div className={styles.explore_main}>
      <div className={styles.explore}>
        <div className={styles.explore_left}>
          <div className={styles.ex_left}>
            <div className={styles.ex_nav}>
              <div className={styles.lt_head}>
                <div>For You 💖</div>
                <div>Trending 🚀</div>
                <div>Staff Picks 🌟</div>
                <div>More <span></span></div>
              </div>
              <div className={styles.rt_head}>
                <button >
                  <RiLayoutMasonryFill />
                </button>
                <button >
                  <RiLayoutTopFill />
                </button>
              </div>
            </div>
                  {/* corosals part */}
            <div className={styles.ex_corosal}>
              <Corocards/>
              
             {/* <Corocards/> */}
            </div> 

            {/* {explore ? */}
            <div className={styles.explore_blogs}>
              {/* part1 blog */}
              <div className={styles.explore_bl}>
            <Article1/>
              </div>

              {/* part2 blog */}
              <div className={styles.explore_bl}>
              <Article2/>
              </div>

              {/* part3 blog */}
              <div className={styles.explore_bl}>
               
                              <Article3/>
              </div>
              </div>
              
                      


          </div>
        </div>
        <div className={styles.explore_right}>
          <aside>
            <div className={styles.rt_cont}>
              <div className={styles.rt_infohead}>Let's get personal</div>
              <div className={styles.rt_mainC}>
                <p>
                  Whatever you’re into, Tumblr has it. Follow tags that matter
                  to you, and the things you love will show up here.
                </p>

                <div className={styles.rt_btn}>
                  <button className={styles.rt_btn1}>
                    Let's follow some tags
                  </button>
                  <button className={styles.rt_btn2}>Maybe Later</button>
                </div>
              </div>
            </div>

            {/*  */}
            <div className={styles.rt_cont2}>
              <div className={styles.rt_cont2H}>Check out these blogs</div>
              <ul>
                {data.map((el) => (
                   <li>
                  <div className={styles.cont2_info}>
                    <div className={styles.cont2_infoIm}>
                      <img
                        src={el.image}
                        alt=""
                      />
                    </div>
                    <div className={styles.cont2_infoT}>
                        <span>{el.title}</span>
                      <div>{el.des}</div>
                    </div>
                  </div>
                  <div className={styles.cont2_infoF}>Follow</div>
                </li>
                ))}
               

               
              </ul>
              <button className={styles.cont2_btn}>Show more blogs</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
