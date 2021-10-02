import { useContext } from 'react';
import HomePage2 from '../../Pages/HomePage2';
import { ContextApi } from '../ContextApi/ContextApiProvider';
import Part from '../../Component3/Part1/Part';
import Lower from '../../Component3/Part4/Lower';
import Feed from '../../Pages/Feed/Feed';
import Tags from '../../Pages/SelectTags/Tags';
import { NavIcons } from '../../Pages/NavbarIcons/NavIcons';
import Post from '../../Pages/CreatePost/Post';
import TextPost from '../../Pages/CreatePost/TextPost';
import PhotoPost from '../../Pages/CreatePost/PhotoPost';

const TumblrTestPage = () => {
    const { setLogin, setSignup } = useContext(ContextApi);
    setLogin(true);
    setSignup(true);
    return (
        <div>
            <Part />
            <HomePage2 />
            <Lower />

            
        </div>
    );
};

export default TumblrTestPage;
