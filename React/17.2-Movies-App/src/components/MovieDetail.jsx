import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetechMovieOrShowDetails , removerSelectedMovie} from '../store/slices/MovieSlice';
import { BsFillStarFill } from "react-icons/bs";
import { IoMdThumbsUp } from "react-icons/io";
import { ImFilm } from "react-icons/im";
import { FaCalendarDays } from "react-icons/fa6";
import Loader from './Loader';

function MovieDetail(props) {
    const {imdbID} = useParams();
    console.log(imdbID);
    const dispacth = useDispatch();
    const data = useSelector((store) => store.movies.selectedMovieOrShow);

    useEffect( () => {
        dispacth(fetechMovieOrShowDetails(imdbID));
        return () => (
            dispacth(removerSelectedMovie())
        )
    },[dispacth,imdbID])

    return (
        <div className=' text-white flex justify-evenly py-[40px] w-[80vw] mx-auto gap-x-4'>
            {
                Object.keys(data).length === 0 ? 
                (
                    <Loader />
                )
                :
                (
                    <div className=' text-white flex justify-evenly py-[40px] w-[80vw] mx-auto gap-x-4'>
                        <div className=' w-3/4'>
                            <div className=' text-4xl'>
                                {data.Title}
                            </div>
                            <div className='mt-2 flex text-[#79b8f3]'>
                                <span className=' flex justify-center items-center mr-4 gap-x-1'>
                                    IMDB Rating <BsFillStarFill className=' text-[#ff9e00]'/>: {data.imdbRating}
                                </span>    
                                <span className=' flex justify-center items-center mr-4 gap-x-1'>
                                    IMDB Votes <IoMdThumbsUp className=' text-[#fafafa]'/>: {data.imdbVotes}
                                </span>    
                                <span className=' flex justify-center items-center mr-4 gap-x-1'>
                                    Runtime <ImFilm className=' text-[rgb(191,213,214)]'/>: {data.Runtime}
                                </span>    
                                <span className=' flex justify-center items-center mr-4 gap-x-1'>
                                    Year <FaCalendarDays className=' text-[#ffdab9]'/>: {data.Year}
                                </span>    
                            </div>
                            <div className='leading-7 mt-6'>
                                {data.Plot}
                            </div>
                            <div className=' mt-7'>
                                <div className=''>
                                    <span className=' px-2 font-semibold w-[100px] inline-block'>Director: </span>
                                    <span className=' text-[#79b8f3]'>{data.Director}</span>
                                </div>
                                <div>
                                    <span className=' px-2 font-semibold w-[100px] inline-block'>Stars: </span>
                                    <span className=' text-[#79b8f3]'>{data.Actors}</span>
                                </div>
                                <div>
                                    <span className=' px-2 font-semibold w-[100px] inline-block'>Generes: </span>
                                    <span className=' text-[#79b8f3]'>{data.Genre}</span>
                                </div>
                                <div>
                                    <span className=' px-2 font-semibold w-[100px] inline-block'>Languages: </span>
                                    <span className=' text-[#79b8f3]'>{data.Language}</span>
                                </div>
                                <div>
                                    <span className=' px-2 font-semibold w-[100px] inline-block'>Awards: </span>
                                    <span className=' text-[#79b8f3]'>{data.Awards}</span>
                                </div>
                            </div>
                        </div>
                    <div>
                        <img src={data.Poster} alt={data.Title}/>
                    </div>
                    </div>
                )
            }
        </div>
        // </div>
    );
}

export default MovieDetail;