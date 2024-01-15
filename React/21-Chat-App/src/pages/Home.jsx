import React from 'react';
import Sidebar from '../components/Sidebar';
import Chatbox from '../components/Chatbox';

function Home(props) {
    return (
        <div className=' bg-[#a7bcff] h-[100vh] flex justify-center items-center'>
            <div className=' border border-white  w-[90%] h-[80%] md:w-[65%] flex rounded-md'>
                <Sidebar />
                <Chatbox />
            </div>

        </div>
    );
}

export default Home;