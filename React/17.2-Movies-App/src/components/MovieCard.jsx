import React from 'react';
import { NavLink } from 'react-router-dom';

function MovieCard({movie}) {
    return (
        <div className=' bg-slate-800 cursor-pointer hover:scale-110 transition-all duration-300 rounded-md min-h-[450px] h-full m-2'>
            <NavLink to={`/movie/${movie.imdbID}`}>
                <div>
                    <div className=' h-[300px]'>
                        <img src={movie.Poster} alt={movie.Title} className="w-full h-full"/>
                    </div>
                    <div className="py-2 px-4">
                        <div className=" text-white mt-2">
                            <h4 className=" text-xl font-normal mb-[10px]">{movie.Title}</h4>
                            <p>{movie.Year}</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default MovieCard;