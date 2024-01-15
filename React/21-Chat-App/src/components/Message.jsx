import React, { useEffect, useRef, useState } from 'react';
import Add from "../img/pic.jpeg"
import { useSelector } from 'react-redux';

function Message({message}) {
    const {currentUser} = useSelector((store) => store.auth);
    const {user} = useSelector((store) => store.chat);

    const ref = useRef();

    useEffect( () => {
        ref.current?.scrollIntoView({behavior:"smooth"})
    },[message])
    return (
        <div ref={ref} 
        className={` flex ${message.senderId === currentUser.uid ? 'flex-row-reverse' : 'flex-row'} gap-5 mb-10`}>
            <div className=' flex flex-col text-gray-600 font-light text-sm'>
                <img src={message.senderId === currentUser.uid ? currentUser.photoURL : user.photoURl} 
                alt="" className=' w-10 h-10 rounded-full object-cover'/>
                <span>
                    Just Now
                </span>
            </div>
            <div className={`flex flex-col max-w-[80%] gap-2 ${message.senderId === currentUser.uid ? "items-end" : "items-start"}`}>
                <p className={`${message.senderId === currentUser.uid ? 'bg-[#8da4f1] rounded-l-lg rounded-br-lg text-white' : 'bg-white rounded-r-lg rounded-bl-lg'} px-3 py-2 max-w-[content]`}>
                    {message.text}
                </p>
                {
                    message.img && <img src={message.img} alt="" width={"50%"}/>
                }
            </div>
        </div>
    );
}

export default Message;