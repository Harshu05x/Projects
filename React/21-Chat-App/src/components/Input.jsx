import React, { useState } from 'react';
import Attach from "../img/attach.png"
import Img from "../img/img.png"
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function Input(props) {
    const [text,setText] = useState("");
    const [img,setImg] = useState(null);
    const {user,chatId} = useSelector((store) => store.chat);
    const {currentUser} = useSelector((store) => store.auth);

    const handleSelect = async() => {
        console.log(img);
        if(img){
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on('state_changed', 
            
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {                    
                    await updateDoc(doc(db,"chats",chatId), {
                        messages: arrayUnion({
                            id: uuid(),
                            text,
                            senderId: currentUser.uid,
                            Date: Timestamp.now(),
                            img: downloadURL
                        })
                    })
                });
            }
            );
        }
        else{
            await updateDoc(doc(db,"chats",chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    Date: Timestamp.now()
                })
            })
        }

        await updateDoc(doc(db,"userChat",currentUser.uid),{
            [chatId+".lastMessage"]: {
                text
            },
            [chatId+".Date"]: serverTimestamp()
        })

        await updateDoc(doc(db,"userChat",user.uid),{
            [chatId+".lastMessage"]: {
                text
            },
            [chatId+".Date"]: serverTimestamp()
        })
        setText("");
        setImg(null);
    }
    return (
        <div className=' bg-white h-14 p-3 rounded-br-lg w-full flex justify-between items-center'>
            <input className=' w-full focus:outline-none text-[#2f2d52] text-lg placeholder:text-gray-300' 
            onChange={ e => setText(e.target.value)}
            value={text}
            placeholder='Type something...'/>
            <div className=' flex items-center justify-between'>
                <img src={Attach} alt="" className=' h-8 cursor-pointer rounded-full hover:bg-[#5d5b8d] p-1'/>
                <input type="file" id="file" 
                onChange={e => setImg(e.target.files[0])}
                style={
                    {
                        display: "none"
                    }
                }/>
                <label htmlFor="file" className=' w-12 mr-2'>
                    <img src={Img} alt=""
                    className='h-8 w-10 cursor-pointer rounded-full hover:bg-[#5d5b8d] p-1'/>
                </label>
                <button className=' text-white bg-[#8da4f1] px-3 py-2 rounded-lg'
                onClick={handleSelect}>
                    Send
                </button>
            </div>
        </div>
    );
} 

export default Input;