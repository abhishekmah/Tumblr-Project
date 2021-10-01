import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "../../Pages/Feed/Feed";
import { ContextApi } from "../ContextApi/ContextApiProvider";
import TumblrLogin from "../tumblr_loginSignup/TumblrLogin";
import TumblrSignup from "../tumblr_loginSignup/TumblrSignup";
import styles from "./css/TumblrLandingPage.module.css";
import TumblrNavigation from "./TumblrNavigation";
import TumblrTestPage from "./TumblrTestPage";

const TumblrLandingPage = () => {
  const {auth,token,setToken,setAuth} = useContext(ContextApi);
  let x = JSON.parse(localStorage.getItem("tumblrUser"));
  
  if(x){
      setToken(x.token);
      setAuth(x.auth);
  }
  return (
    <div className={styles.tumblr_container}>
      <BrowserRouter>
        {/* <TumblrNavigation /> */}
        <Switch>
          {
            !auth && <Route exact path="/" component={TumblrTestPage} />
          }
          {
            auth && <Route exact path="/" component={Feed} />
          }
          <Route exact path="/signup" component={TumblrSignup}/>
          <Route exact path="/login" component={TumblrLogin}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default TumblrLandingPage;
