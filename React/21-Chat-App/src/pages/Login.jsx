import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Login(props) {
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value; 

        try{
            setLoading(true);
            const res = await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
            setLoading(false);
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
                        <span className=' text-[#5d6b8b] text-sm'>Log In</span>
                        <form className=' flex flex-col gap-3' onSubmit={handleSubmit}>
                            <input type='email' placeholder='email'
                            className='w-[250px] p-4 border-b-[#a7bcff] border-b placeholder:text-[rgba(175,175,175)] placeholder:text-sm focus:outline-none'/>
                            <input type='password' placeholder='password'
                            className='w-[250px] p-4 border-b-[#a7bcff] border-b placeholder:text-[rgba(175,175,175)] placeholder:text-sm focus:outline-none'/>
                            <button className=' bg-[#7b96ec] text-white font-semibold px-3 py-2 cursor-pointer'>Log In</button>
                        </form>
                        <p className=' text-sm text-[#5d5b8d] mt-2'>
                            You don't have an account? <NavLink className=" text-[#a7bcff]" to={'/signup'}>Register</NavLink>
                        </p>
                    </div>
                )
            }
        </div>
    );
}

export default Login;