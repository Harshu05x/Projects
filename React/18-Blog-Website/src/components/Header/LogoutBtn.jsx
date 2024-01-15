import React from 'react';
import authService from '../../appwrite/Auth';
import { logout } from '../../store/slices/AuthSlice';
import { useDispatch } from 'react-redux';

function LogoutBtn(props) {
    const dispatch = useDispatch();

    function logoutHandler() {
        authService.logout()
            .then( () => dispatch(logout()));
    }
    
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
    );
}

export default LogoutBtn;