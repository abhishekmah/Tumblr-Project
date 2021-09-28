import React, { useContext } from 'react'
import { ContextApi } from '../ContextApi/ContextApiProvider'

const TumblrSignup = () => {
    const {setLogin,setSignup} = useContext(ContextApi);
    setLogin(true)
    setSignup(false)
    return (
        <div>
            <h1>Signup</h1>
        </div>
    )
}

export default TumblrSignup
