import React from 'react'
import styles from "./NavIcons.module.css";
import { HiHome } from "react-icons/hi";
import { IoCompassOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoFlashSharp } from "react-icons/io5";
import { RiWechat2Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import AccountPop from './AccountPop';

export const NavIcons = () => {
    return (
        <div className={styles.NavRight}>
            <div>
                <HiHome />
            </div>
            <div>
                <IoCompassOutline />
            </div>
            <div>
                <IoIosMail />
            </div>
            <div>
                <RiWechat2Fill />
            </div>
            <div>
                <IoFlashSharp />
            </div>
            <div>
                <AccountPop/>
            </div>
            <div>
                <MdModeEdit />
            </div>
        </div>
    );
};
