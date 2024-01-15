import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { chatReducer } from '../redux/features/ChatSlice';

function Chats(props) {
    const [chats,setChats] = useState([]);
    const {currentUser} = useSelector((store) => store.auth);
    const {user} = useSelector((store) => store.chat);
    const dispatch = useDispatch();

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
                setChats(doc.data());
              });
            return () => {
                unsub();
            }
        }

        currentUser.uid && getChats();
        
    },[currentUser.uid]);
    // console.log(Object.entries(chats));

    const handleSelect = (user) => {
        dispatch(chatReducer({user,currentUser}));
    }
    return (
        <div>
            {
                chats && Object.entries(chats)?.sort((a,b) => b[1].Date - a[1].Date).map((chat) => (
                    <div className=' flex items-center p-3 gap-3 text-white cursor-pointer hover:bg-[#2f2d52]' 
                    key={chat[0]}
                    onClick={() => handleSelect(chat[1].userInfo)}>
                        <img src={chat[1].userInfo.photoURL} alt="" className=' w-14 h-14 rounded-full object-cover hidden sm:block'/>
                        <div>
                            <span className=' font-bold text-lg'>{chat[1].userInfo.displayName}</span>
                            <p className=' text-xs text-gray-300'>{chat[1].lastMessage?.text}</p>
                        </div>
                    </div>
                ))
            }
           
        </div>
    );
}

export default Chats;