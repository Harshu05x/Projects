import React from 'react';

function Loader(props) {
    return (
        <div className=' w-[100vh] h-[80vh] flex justify-center items-center mx-auto'>
            <div className="loader-3">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default Loader;