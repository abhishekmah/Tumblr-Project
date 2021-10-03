import React, { useContext } from 'react';
import { ContextApi } from "../ContextApi/ContextApiProvider";
import LoginPart from "./comps/Part2/LoginPart"

const TumblrLogin = () => {
    const {setLogin,setSignup} = useContext(ContextApi);
    setLogin(false);
    setSignup(true)
    return (
        <div>
           <LoginPart/>
        </div>
    )
}

export default TumblrLogin
