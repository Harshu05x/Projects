import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MovieApi from "../../assets/MovieApi";
import { APIKey }  from "../../assets/MovieApi";

export const fetechMovies = createAsyncThunk( 'Movie/fetchMovies',
async (searchText) => {
        try{
            const res = await MovieApi.get(`?apikey=${APIKey}&s=${searchText}&type=movie`);
            return res.data;
        }
        catch(e){
            alert("Error: " + e.message);
        }
    })

export const fetechShows = createAsyncThunk( 'Movie/fetchShows',
    async (searchText) => {
        try{
            const res = await MovieApi.get(`?apikey=${APIKey}&s=${searchText}&type=series`);
            return res.data;
        }
        catch(e){
            alert("Error: " + e.message);
        }
    })

export const fetechMovieOrShowDetails = createAsyncThunk( 'Movie/fetechMovieOrShowDetails',
    async (id) => {
        try{
            const res = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
            console.log(id);
            return res.data;
        }
        catch(e){
            alert("Error: " + e.message);
        }
    })

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

export const MovieSlice = createSlice( {
    name: 'Movie',
    initialState,
    reducers: {
        removerSelectedMovie: (state) => {
            state.selectedMovieOrShow = {}
        },
        removeMoviesAndShows: (state) => {
            state.movies = {},
            state.shows = {}
        }
    },
    extraReducers: {
        [fetechMovies.pending]: () => {
            console.log("Movies pending");
        },
        [fetechMovies.fulfilled]: (state,actions) => {
            console.log("Movies fetched successfully");
            console.log(actions.payload);
            return {...state, movies: actions.payload}
        },
        [fetechMovies.rejected]: () => {
            console.log("Movies API call rejected");
        },
        [fetechShows.fulfilled]: (state,actions) => {
            console.log("Shows fetched successfully");
            console.log(actions.payload);
            return {...state, shows: actions.payload}
        },
        [fetechMovieOrShowDetails.fulfilled]: (state,actions) => {
            console.log("Details fetched successfully");
            console.log(actions.payload);
            return {...state, selectedMovieOrShow: actions.payload}
        },
    }
})


export const {removerSelectedMovie,removeMoviesAndShows} = MovieSlice.actions;

export default MovieSlice.reducer;