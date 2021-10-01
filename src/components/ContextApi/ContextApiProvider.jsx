import axios from "axios";
import React, { createContext, useState } from "react";

export const ContextApi = createContext();

const ContextApiProvider = ({ children }) => {

    
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
    blog_name: "",
  });
  const [registerErr, setRegisterErr] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
 
  const handlePayload = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleRegister = (history) => {
    if (
      input.email.length &&
      input.password.length >= 6 &&
      input.blog_name.length
    ) {
      handleSignUp(input, history,setToken,setRegisterErr,setAuth);
    } else setRegisterErr('invalid credentials');
  };

  const handleLogin = (history) => {
    if (
        input.email.length &&
        input.password.length >= 6
      ){
          handleLoginCheck(input,history,setToken,setLoginErr,setAuth);
      }
      else
      setLoginErr('invalid credentials')

  }

  return (
    <ContextApi.Provider
      value={{
        auth,
        token,
        login,
        signup,
        setLogin,
        setSignup,
        handlePayload,
        handleRegister,
        handleLogin,
        setAuth,
        setToken
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApiProvider;

const handleSignUp = (payload,history, setToken,setRegisterErr,setAuth) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}users/register`, payload)
    .then((res) => {
      localStorage.setItem(
        "tumblrUser",
        JSON.stringify({ auth: true, token: res.data.token })
      );
      setToken(res.data.token);
      setAuth(true);
      history.push('/login');
    })
    .catch((err) => setRegisterErr(err.response.data.message));
};

const handleLoginCheck = (payload,history,setToken,setLoginErr,setAuth)=>{
    axios
    .post(`${process.env.REACT_APP_API_URL}users/login`, payload)
    .then((res) => {
      localStorage.setItem(
        "tumblrUser",
        JSON.stringify({ auth: true, token: res.data.token })
      );
      setToken(res.data.token);
      setAuth(true);
      history.push('/signup');
    })
    .catch((err) => setLoginErr(err.response.data.message));
}