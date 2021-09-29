import React, { useContext } from 'react'
import SignupPart from './comps/Part1/Part';
import { ContextApi } from '../ContextApi/ContextApiProvider'

const TumblrSignup = () => {
    const {setLogin,setSignup} = useContext(ContextApi);
    setLogin(true)
    setSignup(false)
    return (
        <div>
            <SignupPart/>
        </div>
    )
}

export default TumblrSignup
