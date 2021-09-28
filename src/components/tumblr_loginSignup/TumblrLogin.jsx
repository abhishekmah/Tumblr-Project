import React, { useContext } from 'react';
import { ContextApi } from "../ContextApi/ContextApiProvider";

const TumblrLogin = () => {
    const {setLogin,setSignup} = useContext(ContextApi);
    setLogin(false);
    setSignup(true)
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default TumblrLogin
