import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth , db, storage} from "../firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import addAvatar from "../img/addAvatar.png";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { doc, setDoc } from "firebase/firestore";

function Signup(props) {
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value; 
        const file = e.target[3].files[0];

        try{
            setLoading(true);
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, username);
            
            const uploadTask = uploadBytesResumable(storageRef, file);
        
            uploadTask.on('state_changed', 
            
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user,{
                            displayName: username,
                            photoURL: downloadURL
                        });
                        
                        await setDoc(doc(db,"users",res.user.uid),{
                            uid: res.user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadURL
                        });

                        await setDoc(doc(db,"userChat",res.user.uid),{});

                        setLoading(false);
                        navigate("/");
                        toast.success("Account created Successfully");
                    });
                }
                );
        }
        catch(err){
            toast.error(err.message);
            setLoading(false);
        }

    }
    return (
        <div className=' bg-[#a7bcff] h-[100vh] flex justify-center items-center'>
            {
                loading ? 
                (
                    <Loader />
                )
                :
                (
                    <div className=' flex flex-col bg-white rounded-lg py-5 px-14 justify-center items-center gap-2'>
                        <span className=' text-[#5d5b8d] font-bold text-2xl'>Let's Chat</span>
                        <span className=' text-[#5d6b8b] text-sm'>Sign Up</span>
                        <form className=' flex flex-col gap-3' onSubmit={handleSubmit}>
                            <input type='text' placeholder='username'
                            className='w-[250px] p-4 border-b-[#a7bcff] border-b placeholder:text-[rgba(175,175,175)] placeholder:text-sm focus:outline-none'/>
                            <input type='email' placeholder='email'
                            className='w-[250px] p-4 border-b-[#a7bcff] border-b placeholder:text-[rgba(175,175,175)] placeholder:text-sm focus:outline-none'/>
                            <input type='password' placeholder='password'
                            className='w-[250px] p-4 border-b-[#a7bcff] border-b placeholder:text-[rgba(175,175,175)] placeholder:text-sm focus:outline-none'/>
                            <input type='file' id="file"
                            style={
                                {display: "none"}
                            }
                            className=' p-4 border-b-[#a7bcff] border-b placeholder:text-[rgba(175,175,175)] '/>
                            <label htmlFor="file" className=' cursor-pointer flex items-center text-[rgba(175,175,175)] text-xs gap-2'>
                                <img src={addAvatar} alt="" className=' w-10 h-10'/>
                                Add an avatar
                            </label>
                            <button className=' bg-[#7b96ec] text-white font-semibold px-3 py-2 cursor-pointer'>Sign Up</button>
                        </form>
                        <p className=' text-sm text-[#5d5b8d] mt-2'>
                            You have an account? <NavLink className=" text-[#a7bcff]" to={'/login'}>Login</NavLink>
                        </p>
                    </div>
                )
            }
        </div>
    );
}

export default Signup;