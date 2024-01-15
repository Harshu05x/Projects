import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';

function Navbar(props) {
    const {currentUser} = useSelector((store) => store.auth);

    return (
        <div className=' flex justify-between items-center bg-[#2f2d52] h-14 rounded-tl-md p-4 text-[#ddddf7]'>
            <span className=' font-bold text-lg lg:block hidden'>Let's Chat</span>
            <div className=' flex gap-3'>
                <div className=' flex gap-1 justify-between'>
                    <img src={currentUser.photoURL} alt="" className=' bg-[#ddddf7] rounded-full h-6 w-6 object-cover '/>
                    <span>{currentUser.displayName}</span>
                </div>
                <NavLink className=' bg-[#5d5b8b] text-[#ddddf7] text-xs cursor-pointer rounded-md p-1 absolute bottom-3 md:static'
                onClick={() => signOut(auth)} to={'/login'}>
                    Logout
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;