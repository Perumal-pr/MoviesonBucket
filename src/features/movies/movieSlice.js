import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";



export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies", 
    async (term) => {
    
    
    const response = await movieApi.get(
        `?i=tt3896198&apiKey=${APIKey}&s=${term}&type=movie`
    );

    return response.data;
} );

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows", 
    async (term) => {
    
    
    const response = await movieApi.get(
        `?i=tt3896198&apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
} );

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail", 
    async (id) => {

    const response = await movieApi.get(
        `http://www.omdbapi.com/?apiKey=${APIKey}&i=${id}&Plot=full`
    );

    return response.data;
} );


const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovies.pending, () => {
            console.log("pending");

        })

        builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
            console.log("Fetched Successfully");
            return {...state, movies: payload };
        })

        builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
            console.log("Fetched Successfully");
            return {...state, shows: payload };
        })


        builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
            console.log("Fetched Successfully");
            return {...state, selectMovieOrShow: payload };
        })

        builder.addCase(fetchAsyncMovies.rejected, () => {
            console.log("rejected");
        })
        
    },
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getselectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
