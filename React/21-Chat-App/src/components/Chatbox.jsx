import React from 'react';
import add from "../img/add.png";
import cam from "../img/cam.png";
import more from "../img/more.png";
import Msgbox from './Msgbox';
import Input from './Input';
import { useSelector } from 'react-redux';

function Chatbox(props) {
    const {user} = useSelector((store) => store.chat);
    console.log(user);
    return (
        <div className=' flex-[2] h-full justify-between'>
            <div className=' flex justify-between items-center bg-[#5d5b8d] p-3 text-gray-300 h-14 rounded-tr-md'>
                <span>{user.displayName}</span>
                <div className=' flex gap-2 cursor-pointer'>
                    <img src={add} alt=""  className=' h-7 hover:bg-[#2f2d52] rounded-full p-1'/>
                    <img src={cam} alt=""  className=' h-7 hover:bg-[#2f2d52] rounded-full p-1'/>
                    <img src={more} alt="" className=' h-7 hover:bg-[#2f2d52] rounded-full p-1' />
                </div>
            </div>
            <div className=' bg-[#ddddf7] h-[calc(100%-112px)] overflow-y-scroll'>
                <Msgbox />
            </div>
            <div>
                <Input />
            </div>
        </div>
    );
}

export default Chatbox;