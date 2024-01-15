import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Slider from "react-slick";
import { settings } from '../assets/SliderSettings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader';


function MovieListing(props) {
    const movies = useSelector((store) => store.movies.movies);
    const shows = useSelector((store) => store.movies.shows);
    
    return (
        <div>
            {
                Object.keys(movies).length === 0 && Object.keys(shows).length === 0 ? 
                (
                    <Loader />
                ) : 
                (
                    <div>
                        {/* Movies Section  */}
                        {
                            movies.Response === "True" ? 
                            (
                                <div>
                                    <div className=' my-[20px]'>
                                        <h2 className=' text-[#79b8f3] mb-[10px] font-normal text-2xl'>Movies</h2>
                                        <div className=''>
                                            <Slider {...settings}>
                                                {
                                                    movies.Search.map( (movie,index) => (
                                                        <MovieCard key={index} movie={movie}/>
                                                    ))
                                                }
                                            </Slider>
                                        </div>
                                    </div>
                                </div>    
                            ) : 
                            (
                                <div className=''>
                                    <div>
                                        <div className=' flex justify-center items-centr'>
                                            <h3 className=' text-white'>
                                                {movies.Error}    
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* Shows Section  */}
                        {
                            shows.Response === "True" ? 
                            (
                                <div className=' mb-24'>
                                    <div className=' my-[20px]'>
                                        <h2 className=' text-[#79b8f3] mb-[10px] font-normal text-2xl'>Shows</h2>
                                        <div className=''>
                                            <Slider {...settings}>
                                                {
                                                    shows.Search.map( (movie,index) => (
                                                        <MovieCard key={index} movie={movie}/>
                                                    ))
                                                }
                                            </Slider>
                                        </div>
                                    </div>
                                </div>    
                            ) : 
                            (
                                <div>
                                    <div>
                                        <div className=' text-white flex justify-center items-center'>
                                            <h3>{shows.Error}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default MovieListing;