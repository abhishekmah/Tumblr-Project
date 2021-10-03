import React from 'react'
import styles from "./NavIcons.module.css";
import { HiHome } from "react-icons/hi";
import { IoCompassOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoFlashSharp } from "react-icons/io5";
import { RiWechat2Fill } from "react-icons/ri";
import EditPop from './EditPop'
import AccountPop from './AccountPop';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const NavIcons = () => {
    return (
        <div className={styles.NavRight}>
            <div>
            <Link to="/">
            
                <HiHome />
            </Link>
            </div>
            <div>
                <Link to="/explore">
                <IoCompassOutline />
                </Link>
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
                <EditPop Icon={MdModeEdit}/>
            </div>
        </div>
    );
};
