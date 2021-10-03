import axios from "axios";
import React, { createContext, useState } from "react";

export const ContextApi = createContext();

const ContextApiProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const [currUser,setCurrUser] = useState(false);
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
      handleSignUp(input, history, setToken, setRegisterErr, setAuth);
    } else setRegisterErr("invalid credentials");
  };

  const handleLogin = (history) => {
    if (input.email.length && input.password.length >= 6) {
      handleLoginCheck(input, history, setToken, setLoginErr, setAuth);
    } else setLoginErr("invalid credentials");
  };

  return (
    <ContextApi.Provider
      value={{
          currUser,
        auth,
        token,
        login,
        signup,
        setCurrUser,
        setLogin,
        setSignup,
        handlePayload,
        handleRegister,
        handleLogin,
        handleGetTags,
        handleUserInterests,
        handleUserFeedPosts,
        handleCreatePostApi,
        handleFollowUser,
        handleUnfollowUser,
        handleLikePost,
        handleUnlikePost,
        handleGetBlogs,
        setAuth,
        setToken,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApiProvider;
//sign up api
const handleSignUp = (payload, history, setToken, setRegisterErr, setAuth) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}users/register`, payload)
    .then((res) => {
      localStorage.setItem(
        "tumblrUser",
        JSON.stringify({ auth: true, token: res.data.token })
      );
      setToken(res.data.token);
      setAuth(true);
      history.push("/getting_to_know_tumblr");
    })
    .catch((err) => setRegisterErr(err.response.data.message));
};

//login api
const handleLoginCheck = (payload, history, setToken, setLoginErr, setAuth) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}users/login`, payload)
    .then((res) => {
      localStorage.setItem(
        "tumblrUser",
        JSON.stringify({ auth: true, token: res.data.token })
      );
      setToken(res.data.token);
      setAuth(true);
      history.push("/");
    })
    .catch((err) => setLoginErr(err.response.data.message));
};

//get tags api
const handleGetTags = (setTags) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}tags`, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token,
      },
    })
    .then((res) => setTags(res.data.tags))
    .catch((err) => console.log(err.response));
};

//post user interests

const handleUserInterests = (arr, history) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}users/userdetail`,
      { interests: arr },
      {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token,
        },
      }
    )
    .then((res) => history.replace("/"))
    .catch((err) => console.log(err.response));
};

//get posts

const handleUserFeedPosts = (setFeedPosts) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}posts`, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token,
      },
    })
    .then((res) => {setFeedPosts(res.data)})
    .catch((err) => console.log(err.response));
};

//create Post

const handleCreatePostApi = (payload, closeModal) => {
  const formData = new FormData();
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  for (let i in payload.images) formData.append("images", payload.images[i]);
  for (let j in payload.tags) formData.append("tags", payload.tags[j]);

  axios
    .post(`${process.env.REACT_APP_API_URL}posts/create`, formData, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token,
      },
    })
    .then((res) => {closeModal();alert('Blogpost created successfully!')})
    .catch((err) => console.log(err));
};

//follow user
const handleFollowUser = (id,updateUser)=>{
    axios.post(`${process.env.REACT_APP_API_URL}users/follow/${id}`,{},{
        headers: {
          Authorization:"Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token
        }
      }).then(res=>updateUser(res.data.user)).catch(err=>console.log(err));
}

//unfollow user
const handleUnfollowUser = (id,updateUser)=>{
    axios.post(`${process.env.REACT_APP_API_URL}users/unfollow/${id}`,{},{
        headers: {
          Authorization:"Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token
        }
      }).then(res=>updateUser(res.data.user)).catch(err=>console.log(err));
}

//like post
const handleLikePost = (id,updateUser)=>{
  axios.post(`${process.env.REACT_APP_API_URL}users/like/${id}`,{},{
    headers: {
      Authorization:"Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token
    }
  }).then(res=>updateUser(res.data.user)).catch(err=>console.log(err));
}


//unlike post
const handleUnlikePost = (id,updateUser)=>{
    axios.post(`${process.env.REACT_APP_API_URL}users/unlike/${id}`,{},{
        headers: {
          Authorization:"Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token
        }
      }).then(res=>updateUser(res.data.user)).catch(err=>console.log(err));
}

//get all bloggers

const handleGetBlogs = (setBlogs)=>{
    axios.get(`${process.env.REACT_APP_API_URL}users`,{
        headers: {
          Authorization:"Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token
        }
      }).then(res=>setBlogs(res.data.users)).catch(err=>console.log(err));
}