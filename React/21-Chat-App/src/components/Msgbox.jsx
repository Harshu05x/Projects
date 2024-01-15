import React, { useEffect, useState } from 'react';
import Message from './Message';
import "../index.css";
import { useSelector } from 'react-redux';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const Msgbox = () => {
    const {user,chatId} = useSelector((store) => store.chat);
    const [messages,setMessage] = useState([]);

    useEffect(() => {

        if(chatId !== null){
            const unSub = onSnapshot(doc(db,"chats",chatId), (doc) => {
                doc.exists() && setMessage(doc.data().messages);
            })
    
            return () => {
                unSub();
            }
        }
    },[chatId]);

    return (
        <div className=' bg-[#ddddf7] p-3'>
            {
                !chatId ? 
                (
                    <p>No Chats</p>
                    )
                    :
                    (
                    <div>
                        {
                            messages.map( (m) => (
                                <Message message={m} key={m.id}/>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Msgbox;