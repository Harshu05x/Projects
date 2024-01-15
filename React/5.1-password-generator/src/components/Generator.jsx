import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import copy from "copy-to-clipboard";


function Generator(props) {

    const [data,setData] = useState({
        num: false,
        char: false,
        length: 8,
    });

    const [password,setPassword] = useState("");

    function dataChangeHandler(event){
        const {name,value,checked,type} = event.target;
        setData( prevFromData => {
            return{
                ...prevFromData,
                [name]: type === 'checkbox' ? checked : value
            }
        });
    }

    function generatePassword(){
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz";

        if(data.num) str += "0123456789";
        if(data.char) str += "~`!@#$%^&*()_+{}[]:;<=>?_+";

        for(let i = 0; i < data.length; i++){
            let index = Math.floor(Math.random() * str.length);
            pass += str.charAt(index);
        }
        setPassword(pass);
    }

    const passwordRef = useRef(null);

    useEffect( () => {
        generatePassword();
    },[data]);


    function copyToClip(){
        if(password.length > 3){
            passwordRef.current?.select();
            copy(password);
            toast.success("Copied");
        }
        else{
            toast.error('Password is too small.');
        }   
    }
    return (
        <div className='w-[500px] flex flex-col justify-between items-center bg-slate-700 py-6 px-10 rounded-md gap-y-4 text-white'>
            <div className='flex w-full bg-blue-400 rounded-md outline outline-black' >
                <input type="text" className=' w-full px-3 py-4 rounded-l-md text-black text-xl font-semibold' value={password} readOnly ref={passwordRef}/>
                <button className=' px-4 py-2  rounded-md text-xl font-semibold'
                onClick={copyToClip}>Copy</button>    
            </div> 
            <div className=' flex gap-x-4 justify-center items-center'>
                <input type="range" min='0' max='20' name='length'
                onChange={dataChangeHandler} value={data.length}></input>
                
                <p className=' text-xl font-semibold'>Length: {data.length}</p> 
                
                <div className=' flex flex-col justify-center items-start'>
                    <div className=' flex justify-center items-center gap-x-1'>
                        <input type='checkbox' id="#num" name='num' checked={data.num}
                        onChange={dataChangeHandler} className=''></input>
                        <label htmlFor="nums" className=' text-xl font-semibold'>Numbers</label>
                    </div>
                    <div className=' flex justify-center items-center gap-x-1'>
                        <input type='checkbox' id="#char" name='char' checked={data.char}
                        onChange={dataChangeHandler}></input>
                        <label htmlFor="char" className=' text-xl font-semibold'>Characters</label>
                    </div>
                </div>

            </div>       
        </div>
    );
}

export default Generator;