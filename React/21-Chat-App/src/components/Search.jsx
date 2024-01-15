import React, { useState } from 'react';
import { getDoc,collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

function Search(props) {
    const [userName,setUsername] = useState("");
    const [user,setUser] = useState("");
    const {currentUser} = useSelector((store) => store.auth);

    const searchUser = async () => {
        // Create a query against the collection.
        console.log(userName);
        const q = query(collection(db,"users"),where("displayName","==",userName));

        try{
            const querySnapshot = await getDocs(q);
            setUser("");
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setUser(doc.data());
            });
        }
        catch(err){
            setUsername("");
            toast.error("User not found");
        }
    }

    const handleKey = (e) => {
        // e.preventDefault();
        e.code === "Enter" && searchUser();
    }

    const handleSelect = async(e) => {
        const combinedId =  currentUser.uid > user.uid ? 
                            currentUser.uid + user.uid : 
                            user.uid + currentUser.uid;

        console.log(combinedId);
        
        try{
            const res = await getDoc(doc(db,"chats",combinedId));

            if(!res.exists()){
                await setDoc(doc (db,"chats",combinedId),{messages: []});

                await updateDoc(doc (db,"userChat",currentUser.uid),{
                    [combinedId+".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId+".Date"]: serverTimestamp()
                });

                await updateDoc(doc (db,"userChat",user.uid),{
                    [combinedId+".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId+".Date"]: serverTimestamp()
                });
            }
        }
        catch(err){
            toast.error(err);
        }
        setUser(null);
        setUsername("");
    }
    return (
        <div >
            <div>
                <input type="text" className=' bg-transparent w-full focus:outline-none text-white placeholder:text-gray-300 border-b-gray-300 border-b px-2 py-1' 
                placeholder='Find a user'
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKey}/>
            </div>
            {
                user && 
                <div onClick={handleSelect} 
                className=' flex flex-col md:flex-row items-center p-2 gap-2 text-white cursor-pointer hover:bg-[#2f2d52] border-b-gray-300 border-b my-2'>
                    <img src={user.photoURL} alt="" className=' w-10 h-10 rounded-full object-cover'/>
                    <div>
                        <span className=' font-bold text-lg'>{user.displayName}</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default Search;