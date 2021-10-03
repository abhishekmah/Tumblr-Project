import React, { useContext, useState } from "react";
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
import { ContextApi } from "../../components/ContextApi/ContextApiProvider";

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

  const {handleUserFeedPosts,handleGetBlogs} = useContext(ContextApi);
  const [users,setUsers] = useState(false);
  if (!users) handleGetBlogs(setUsers);
  const [explore,setExplore] = useState(false);
  if(!explore){
    handleUserFeedPosts(setExplore);
  }
let arr1 = []; let arr2 = []; let arr3=[];
if(explore){
  let x = Math.floor(explore.posts.length/3);
  for(let i=0; i<x; i++)
  arr1.push(explore.posts[i]);
  for(let i=x; i<(2*x); i++)
  arr2.push(explore.posts[i]);
  for(let i=2*x; i<explore.posts.length; i++)
  arr3.push(explore.posts[i]);
}
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
            <Article1 arr1={arr1}/>
              </div>

              {/* part2 blog */}
              <div className={styles.explore_bl}>
              <Article2 arr2={arr2}/>
              </div>

              {/* part3 blog */}
              <div className={styles.explore_bl}>
               
                              <Article3 arr3={arr3}/>
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
                {users && users.map((el,i) => (
                   <li>
                  <div className={styles.cont2_info}>
                    <div className={styles.cont2_infoIm}>
                    <img
                    src={
                      !el.avatar || !el.avatar.length
                        ? `https://picsum.photos/50?random=${i}`
                        : el.avatar
                    }
                    alt="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_small.gif"
                  />
                    </div>
                    <div className={styles.cont2_infoT}>
                        <span>{el.blog_name}</span>
                      <div>{el.Bio?.length>0?el.Bio:"Untitled"}</div>
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
