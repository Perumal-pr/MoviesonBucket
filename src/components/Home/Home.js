import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies,fetchAsyncShows, getAllMovies, getAllShows } from "../../features/movies/movieSlice";

const Home = () => {
    const movieText ="Galaxy";
    const seriesText ="Lost";
    const dispatch = useDispatch();
    const data = useSelector(getAllMovies);
    

    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(seriesText));

    },[dispatch]);

    return(
        <div>
            { Object.keys(data).length === 0?
            (<div className="loader">...Loading</div>) :
        (<div className="banner-img">
        <MovieListing />
        </div>) }
        </div>
    );
};

export default Home;