import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

function Sidebar(props) {
    return (
        <div className=' flex-[1] bg-[#3e3c61] rounded-l-md relative'>
            <Navbar />
            <Search />
            <Chats />
        </div>
    );
}

export default Sidebar;