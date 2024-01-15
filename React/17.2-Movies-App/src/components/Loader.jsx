import React from 'react';

function Loader(props) {
    return (
        <div className=' flex justify-center items-center translate-y-2/4 mt-32'>
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
            </div>
        </div>
    );
}

export default Loader;