import React from 'react';
import pnf from "../assets/pnf.jpg"

function PageNotFound(props) {
    return (
        <div className=' h-[80vh] mx-auto'>
            <img src={`${pnf}`} alt="Page Not Found" className=' h-full mx-auto'/>
        </div>
    );
}

export default PageNotFound;