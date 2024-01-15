
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../Hook/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag(props) {

    // const [gif,setGif] = useState('');
    // const [loading,setLoading] = useState(false);
    const [title,setTitle] = useState('Car');
    
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random/?api_key=${API_KEY}&tag=${title}`;
    //     const {data} = await axios.get(url);
    //     const imgSrc = data.data.images.downsized_large.url;
    //     setGif(imgSrc);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // },[]);

    const {gif,loading,fetchData} = useGif(title);

    return (
        <div className='w-1/2 flex flex-col items-center bg-blue-400 border border-black rounded-lg mt-6 mb-6 p-4 gap-y-8'>
            <h1 className='text-center text-2xl font-bold underline uppercase mb-3'> Random {title} Gif</h1>
            
            {
                loading ? (<Spinner className="mb-6 mt-6"/>) : (<img src={gif} width="450px" height='100px' className='mb-4'></img>)
            }

            <div className='flex flex-col gap-y-2 w-full items-center'>
                <input className='bg-[#ffffff] rounded-lg text-lg text-center w-9/12 px-6 py-2 font-bold mb-2 mt-2' 
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
                value={title}/>

                <button onClick={() => fetchData(title)}
                className='bg-[#ffffffb0] rounded-lg text-lg w-9/12 py-2 font-bold'>Generate</button>
            </div>
        </div>
    );
}
export default Tag;