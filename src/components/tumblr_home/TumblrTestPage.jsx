import { useContext } from "react"
import HomePage2 from "./Pages/HomePage2";
import { ContextApi } from "../ContextApi/ContextApiProvider"
import Part from "../../Component3/Part1/Part"

const TumblrTestPage = () => {
    const {setLogin,setSignup} = useContext(ContextApi);
    setLogin(true);
    setSignup(true);
    return (
        <div>
            <Part/>
            <HomePage2/>

        </div>
    )
}

export default TumblrTestPage
