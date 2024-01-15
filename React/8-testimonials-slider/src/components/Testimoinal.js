import { useState } from "react";
import Card from "./Card";
import {FaAngleLeft,FaAngleRight, FaRegWindowClose} from 'react-icons/fa';


function Testimoinal(props){
    let reviews = props.reviews;
    let len = reviews.length;
    const [val,SetVal] = useState(0);

    function leftShiftHandler(){
        if(val === 0)
            SetVal(len-1);
        else    
            SetVal(val-1);
    }

    function rightShiftHandler(){
        if(val === len-1)
            SetVal(0);
        else 
            SetVal(val+1);
    }

    function surpriseHandler(){
        let temp = Math.floor(Math.random()*len);
        console.log(temp);
        if(temp === val)
            surpriseHandler();
        else
            SetVal(temp);
    }

    return(
        <div className=" w-[85vw] md:w-[700px] flex flex-col justify-center items-center bg-white mt-10 p-10 transition-all duration-700
        hover:shadow-2xl">
            <Card review={reviews[val]}></Card>

            <div className=' flex text-3xl text-violet-400 mx-auto mt-10 gap-3'>
                <button
                onClick={leftShiftHandler} 
                className=' cursor-pointer hover:text-violet-500'>
                    <FaAngleLeft />
                </button>
                <button
                onClick={rightShiftHandler}  
                className=' cursor-pointer hover:text-violet-500'>
                    <FaAngleRight />
                </button>
            </div>

            <div>
                <button 
                onClick={surpriseHandler} 
                className=' bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white mt-5'>
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimoinal;