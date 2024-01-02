import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import user from "../../images/profileImage.png";
import "./Header.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
    const dispatch = useDispatch();
    const [term,setTerm] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        if(term==="") return alert("Please enter movie or show name to search");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
    };
    return(

        <div className="header">
            
            <div className="logo"><Link to="/">MoviesOnBucket</Link></div>
            <div className="search-bar">
                <form  onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="Search Movies or shows" onChange={(e) => setTerm(e.target.value)} />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
             <div className="user-image">
               <img src={user} alt="user" />
             </div>
        </div>
    );
};

export default Header;