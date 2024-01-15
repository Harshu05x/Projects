import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import user from "../assets/user.png";
import { BiSearch } from "react-icons/bi"
import { useDispatch } from 'react-redux';
import { fetechMovies, fetechShows, removeMoviesAndShows } from '../store/slices/MovieSlice';
import { toast } from "react-hot-toast"
import logo  from "../assets/logo.png"

function Header(props) {
    const [searchText, setSearchText] = useState("");
    const dispacth = useDispatch();
    const {imdbID} = useParams();
    console.log("Header: " + imdbID);
    function submitHandler(e){
        e.preventDefault();
        if(searchText === ""){
            toast.error("Please enter something");
            return;
        }

        dispacth(removeMoviesAndShows());
        dispacth(fetechMovies(searchText));
        dispacth(fetechShows(searchText));
        setSearchText("");
    }

    return (
        <div className=' bg-slate-800 h-[72px] py-[40px] flex items-center justify-around px-[20px]'>
            <NavLink to='/'>
                <div className=' text-white text-xl font-semibold'>
                    <img src={logo} alt="" className=' w-[200px] h-[50px]'/>
                </div>
            </NavLink>
            <div className=' w-2/4 flex justify-between'>
                <form onSubmit={submitHandler} className=' flex justify-center items-center w-4/5'>
                    <input 
                    className=' w-full rounded-md px-4 py-2 h-[40px] outline-none'
                    value={searchText}
                    onChange={ (e) => setSearchText(e.target.value)}
                    placeholder='Search for a Movie or show...'/>
                    
                    <button type='submit'
                    className=' cursor-pointer p-2 text-2xl h-[40px] text-white'>
                            <BiSearch/>
                    </button>
                </form>
            </div>
            <div className=' w-[35px] h-[35px]'>
                <img src={user} alt="user" width="35px" height="35px" />
            </div>
        </div>
    );
}

export default Header;