
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../Hook/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random(props) {

    // const [gif,setGif] = useState('');
    // const [loading,setLoading] = useState(false);
    
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random/?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imgSrc = data.data.images.downsized_large.url;
    //     setGif(imgSrc);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // },[]);

    const {gif,loading,fetchData} = useGif();

    return (
        <div className='w-1/2 flex flex-col items-center bg-green-400 border border-black rounded-lg mt-6 mb-6 p-4 gap-y-8'>
            <h1 className='text-center text-2xl font-bold underline uppercase'>A Random Gif</h1>
            
            {
                loading ? (<Spinner />) : (<img src={gif} width="450px" height='100px'></img>)
            }

            <button onClick={() => fetchData()}
            className='bg-[#ffffffb0] rounded-lg text-lg w-9/12 py-2 font-bold'>Generate</button>
        </div>
    );
}
export default Random;