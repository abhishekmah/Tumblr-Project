import React from 'react'
import styles from "./sign.module.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";



const useStyles = makeStyles((theme) => ({
  
   buton: {
       width: "100%",
       textTransform: "none",
        background: "rgb(0,184,255)",
        fontSize: "16px",
        fontWeight: "500",
        marginTop: "12px",
      lineHeight: "1.5",
         '&:hover': {
         background: "rgb(0,184,255)",
    },
    },
   
     buton1: {
       width: "100%",
       textTransform: "none",
        background: "rgb(0,207,53)",
        fontSize: "16px",
         fontWeight: "500",
         marginTop: "12px",
      lineHeight: "1.5",
           '&:hover': {
         background: "rgb(0,207,53)",
    },
        
    },
    buton3: {
          width: "100%",
       textTransform: "none",
        background: "white",
        fontSize: "16px",
         fontWeight: "500",
         marginTop: "12px",
      lineHeight: "1.5",
           '&:hover': {
         background: "white",
    },
     },
}));
export default function Sign() {
     const classes = useStyles();
    return (
        <div className={styles.main_sign}>
            <div className={styles.upper}>
                <Button className={classes.buton}  backgroundColor= "00B8FF"  variant="contained"  color="rgb(0,184,255)"
                >Sign up</Button>
                
                 <Button className={classes.buton1}  backgroundColor= "00B8FF"  variant="contained"  color="rgb(0,184,255)"
                >Log In</Button>
                
                <div className={styles.divide}>
                    <div className={styles.lin}></div>
                    <span> or</span>
                       
                     <div className={styles.lin}></div>
                </div>

                
                <Button className={classes.buton3} variant="contained"
                  startIcon={<FcGoogle />}  
                >Continue with Google</Button>

                <Button className={classes.buton3} variant="contained"
                  startIcon={<FaApple />}  
                >Continue with Apple</Button>

                <div style={{textAlign:"center",marginLeft:"15%"}}>
                <div className={styles.sig_botm}>
                    <span style={{fontSize:"20px",height:"18px"}}> <FaRegCompass/></span>
                   
                    <span>Here's what's trending</span>
                    </div>
                    </div>

            </div>
        </div>
    )
}
