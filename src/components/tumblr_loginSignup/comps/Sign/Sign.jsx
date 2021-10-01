import React, { useContext, useState } from "react";
import styles from "./sign.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import PasswordInput from "../../../Password_Strength_Indicator/password-input";
import { ContextApi } from "../../../ContextApi/ContextApiProvider";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  buton: {
    width: "100%",
    textTransform: "none",
    background: "rgb(0,184,255)",
    fontSize: "16px",
    padding: "10px 0px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",
    "&:hover": {
      background: "rgb(0,184,255)",
    },
  },

  buton1: {
    width: "100%",
    textTransform: "none",
    background: "rgb(0,207,53)",
    padding: "10px 0px",
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",
    "&:hover": {
      background: "rgb(0,207,53)",
    },
  },
  inputBoxes: {
    "& input": {
      marginTop: "10px",
    },
  },
  email: {
    width: "100%",
    border: "none",
    outline: "none",
    padding: "15px 0px",
    textIndent: "10px",
    fontSize: "1.0em",
    minWidth: "250px",
    borderRadius: "2px",
    backgroundColor: "white",
  },
  tnc:{
    color:'white',
    fontSize:'small',
  },
  buton3: {
    width: "100%",
    textTransform: "none",
    background: "white",
    fontSize: "16px",
    padding: "10px 0px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",
    "&:hover": {
      background: "white",
    },
  },
}));
export default function Sign() {
  const classes = useStyles();
const {handlePayload,handleRegister} = useContext(ContextApi)
const history = useHistory();

  const [password, setPassword] = useState("");

  const handlePasswordChanges = (event) => {
    setPassword(event.target.value);
    handlePayload(event);
  };
  return (
    <div className={styles.main_sign}>
      <div className={styles.upper}>
        <form>
          <div className={classes.inputBoxes}>
            <input className={classes.email} type="email" name="email" placeholder="Email" onChange={handlePayload} />

            <PasswordInput
              value={password}
              placeholder="Password"
              handleChanges={handlePasswordChanges}
            />
            <input
            name="blog_name"
              className={classes.email}
              type="text"
              placeholder="Blog name"
              onChange={handlePayload}
            />
          </div>
        </form>
        <p className={classes.tnc}>
          By clicking "sign up", or continuing with the other options below, you
          agree to Tumblr’s <u>Terms of Service</u> and have read the <u>Privacy Policy</u>
        </p>
        <Button className={classes.buton} variant="contained" onClick={()=>handleRegister(history)}>
          Sign up
        </Button>

        <div className={styles.divide}>
          <div className={styles.lin}></div>
          <span> or</span>

          <div className={styles.lin}></div>
        </div>

        <Button
          className={classes.buton3}
          variant="contained"
          startIcon={<FcGoogle />}
        >
          Continue with Google
        </Button>

        <Button
          className={classes.buton3}
          variant="contained"
          startIcon={<FaApple />}
        >
          Continue with Apple
        </Button>

        <div style={{ textAlign: "center", marginLeft: "15%" }}>
          <div className={styles.sig_botm}>
            <span style={{ fontSize: "20px", height: "18px" }}>
              {" "}
              <FaRegCompass />
            </span>

            <span>Here's what's trending</span>
          </div>
        </div>
      </div>
    </div>
  );
}
