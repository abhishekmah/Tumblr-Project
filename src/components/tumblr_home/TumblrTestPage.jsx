import { useContext } from "react"
import HomePage2 from "../../Pages/HomePage2";
import { ContextApi } from "../ContextApi/ContextApiProvider"
import Part from "../../Component3/Part1/Part"
import Lower from "../../Component3/Part4/Lower"
import HomePage2 from "../../Pages/HomePage2"
import Feed from "../../Pages/Feed/Feed"
import Lower from "../../Component3/Part4/Lower";

const TumblrTestPage = () => {
    const {setLogin,setSignup} = useContext(ContextApi);
    setLogin(true);
    setSignup(true);
    return (
        <div>
            <Part/>
            <HomePage2/>
            <Lower/>

            {/* <Feed/> */}
        </div>
    )
}

export default TumblrTestPage
