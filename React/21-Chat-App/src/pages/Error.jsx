import React from 'react';
import err from "../img/error_img.png"

function Error(props) {
    return (
        <div className=' bg-[#a7bcff] h-[100vh] justify-center items-center flex flex-col'>
            <h1 className=' text-4xl font-bold'>Opps !!!</h1>
            <img src={err} alt="" className=' w-[60vh] h-[60vh]'/>
            <h1 className=' text-4xl font-bold'>Page Not Found</h1>
        </div>
    );
}

export default Error;