import React from "react";
import Sign from "../Sign/Sign";
import Upper_sign from "../UpperSign/Upper_sign";
import styles from "./part.module.css";

export default function Part() {
  return (
    <div className={styles.comp} id={styles.slide}>
      <div className={styles.comp_part}>
        <Upper_sign></Upper_sign>

       
          </div>
          
           <div className={styles.foot}>
          <div className={styles.foot_left}>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Jobs</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.foot_right}>
Posted by flamingbiscuit</div>
        </div>
    </div>
  );
}
