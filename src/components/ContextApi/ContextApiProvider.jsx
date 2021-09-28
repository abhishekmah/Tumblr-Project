import React, { createContext, useState } from 'react'

export const ContextApi = createContext();

const ContextApiProvider = ({children}) => {

    const [auth,setAuth] = useState(false);
    const [token,setToken] = useState('');
    const [login,setLogin] = useState(true);
    const [signup,setSignup] = useState(true);


    return (
        <ContextApi.Provider value={{auth,token,login,signup,setLogin,setSignup}}>{children}</ContextApi.Provider>
    )
}

export default ContextApiProvider
