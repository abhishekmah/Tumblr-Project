import React from 'react'
import styles from "./explore.module.css";
import Carousel from "react-elastic-carousel"
import { Button } from '@mui/material';


const aray = [
    {
        "id": 1,
        "title": "quotes",
        "img": ["https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg", "https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg"],

    },
    {
            "id": 2,
        "title": "liofe",
        "img": ["https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg", "https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg"],

    },
    {
                "id": 3,
        "title": "asdsfg",
        "img": ["https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg", "https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg"],

    },
    {
                    "id": 4,
        "title": "qu",
        "img": ["https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg", "https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg"],

  },
     {
                    "id": 5,
        "title": "qu",
        "img": ["https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg", "https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg"],

  },
      {
                    "id": 6,
        "title": "qu",
        "img": ["https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg", "https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg"],

  },
       {
                    "id": 7,
        "title": "qu",
        "img": ["https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg", "https://64.media.tumblr.com/2907707f949408590013dbbe852519fc/8e78ce9be9d7d3c4-09/s250x250_c1/5fa503dea8f5e87434e9ea673e7fcccf96fff545.jpg"],

  },
        {
                    "id": 8,
        "title": "qu",
        "img": [],

    },
]


export default function Corocards() {
    return (
      <div style={{width:"100%"}}>
        <Carousel itemsToShow={5} pagination={false}>
            {aray.map((el,i) =>{ return(
            <div key={el.id} className={styles.coro_card}>
                    <div className={styles.card_hash}>#{el.title}</div>
                <div className={styles.coro_imgP}>
                  <div className={styles.coro_img}>
                    <img
                      src={el.img[0]}
                      alt=""
                    />
                  </div>
                  <div className={styles.coro_img}>
                    <img
                      src={el.img[1]}
                      alt=""
                    />
                  </div>
                </div>
                <Button style={{marginTop:"10px",color:`${i%2===0?"black":"white"}`,backgroundColor:`${i%2===0?"white":"black"}`}} variant="contained" color="primary" className={styles.coro_cardB}>Follow</Button>
                </div>
                )})}
                 </Carousel>
        </div>
    )
}
