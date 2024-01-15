import React from 'react';
import logo from '../assets/logo.png'

function Header(props) {
    return (
        <div className=' w-full flex justify-center items-center border border-b-2 py-2 shadow-lg shadow-gray-400 fixed bg-white top-0'>
            <header>
                <img src={logo} width={250} height={50}></img>
            </header>
        </div>
    );
}

export default Header;