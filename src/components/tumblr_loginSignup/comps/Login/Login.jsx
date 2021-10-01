import React, { useContext } from "react";
import styles from "./Login.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
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
  tnc: {
    color: "white",
    fontSize: "small",
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
export default function Login() {
  const classes = useStyles();
  const { handlePayload, handleLogin } = useContext(ContextApi);
const history = useHistory();
  return (
    <div className={styles.main_sign}>
      <div className={styles.upper}>
        <form>
          <div className={classes.inputBoxes}>
            <input className={classes.email} name="email" type="email" placeholder="Email" 
              onChange={handlePayload} />

            <input
              name="password"
              className={classes.email}
              type="password"
              placeholder="Password"
              onChange={handlePayload}
            />
          </div>
        </form>
        <p className={classes.tnc}>
          By clicking "sign up", or continuing with the other options below, you
          agree to Tumblr’s <u>Terms of Service</u> and have read the{" "}
          <u>Privacy Policy</u>
        </p>

        <Button className={classes.buton1} variant="contained" onClick={()=>handleLogin(history)}>
          Log In
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
