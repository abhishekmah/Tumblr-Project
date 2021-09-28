import { useContext } from "react"
import { ContextApi } from "../ContextApi/ContextApiProvider"


const TumblrTestPage = () => {
    const {setLogin,setSignup} = useContext(ContextApi);
    setLogin(true);
    setSignup(true);
    return (
        <div>
            <h1>Hello Welcome</h1>
        </div>
    )
}

export default TumblrTestPage
