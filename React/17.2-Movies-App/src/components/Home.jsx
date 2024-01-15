import React, { useEffect } from 'react';
import MovieListing from './MovieListing'
import { useDispatch, useSelector } from 'react-redux';
import { fetechMovies, fetechShows } from '../store/slices/MovieSlice';
import Loader from './Loader';


function Home(props) {
    const dispacth = useDispatch();
    const loading = useSelector( (store) => store.movies.loading);
    const {shows,movies} = useSelector( (store) => store.movies);

    useEffect( () => {    
        dispacth(fetechMovies("Harry"));
        dispacth(fetechShows("Friends"));
    },[dispacth])
    return (
        <div className=''>
            {
                Object.keys(movies).length === 0 && Object.keys(shows).length === 0 ? 
                (
                    <Loader />
                )
                :
                (
                    <MovieListing />
                )
            }
        </div>
    );
}

export default Home;