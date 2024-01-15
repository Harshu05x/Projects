import React from 'react';
import logo from "../assets/logo.png"

function Logo({width = "100px"}) {
    return (
        <div className=' text-center flex justify-center items-center'>
            <img src={logo} alt="" width={width}/>
        </div>
    );
}

export default Logo;