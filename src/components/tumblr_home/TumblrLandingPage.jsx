import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TumblrLogin from "../tumblr_loginSignup/TumblrLogin";
import TumblrSignup from "../tumblr_loginSignup/TumblrSignup";
import styles from "./css/TumblrLandingPage.module.css";
import TumblrNavigation from "./TumblrNavigation";
import TumblrTestPage from "./TumblrTestPage";

const TumblrLandingPage = () => {
  return (
    <div className={styles.tumblr_container}>
      <BrowserRouter>
        <TumblrNavigation />
        <Switch>
          <Route exact path="/" component={TumblrTestPage} />
          <Route exact path="/signup" component={TumblrSignup}/>
          <Route exact path="/login" component={TumblrLogin}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default TumblrLandingPage;
