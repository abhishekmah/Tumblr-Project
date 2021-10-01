import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextApi } from "../ContextApi/ContextApiProvider";
import styles from "./css/TumblrNavigation.module.css";
import SearchBox from "./searchBox/SearchBox";

const TumblrNavigation = () => {
  const {login,signup,auth,token,setToken,setAuth} = useContext(ContextApi);
  
  let x = JSON.parse(localStorage.getItem("tumblrUser"));
  
  if(x){
      setToken(x.token);
      setAuth(x.auth);
  }
  

  return (
    <div className={styles.tumblr_navContainer}>
      <div className={styles.tumblr_nav}>
        <div className={styles.tumblr_logo}>
          <Link to="/">
            <div>
              <svg viewBox="0 0 21 36.8" width="20" height="33" fill="white">
                <path d="M21 36.75h-6.2c-5.577 0-9.733-2.844-9.733-9.646V16.21H0v-5.9C5.576 8.876 7.909 4.12 8.177 0h5.79v9.354h6.757v6.856h-6.756v9.486c0 2.843 1.448 3.826 3.753 3.826h3.271L21 36.75z"></path>
              </svg>
            </div>
          </Link>
          <div className={styles.tumblr_searchBox}>
            <SearchBox />
          </div>
        </div>
        {
          !auth && <div className={styles.tumblr_loginSignup}>
          {login && <Link to="/login">
            <Button  variant="contained" style={{backgroundColor: "rgb(0,207,53)",minWidth:"100px"}}>
              Log in
            </Button>
          </Link>}
         { signup && <Link to="/signup">
            <Button variant="contained" style={{backgroundColor: "rgb(0,184,255)",minWidth:"100px"}}>
              Sign up
            </Button>
          </Link>}
        </div>
        }
      </div>
    </div>
  );
};

export default TumblrNavigation;
