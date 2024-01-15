import React from 'react';
import { NavLink } from "react-router-dom"
import  databaseService  from "../appwrite/config"

function PostCard({$id,title,featuredImage}) {
    // console.log(databaseService.getFilePreview(featuredImage));
    return (
        <NavLink to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={databaseService.getFilePreview(featuredImage)} alt={title}
                    className='rounded-xl' 
                    height="100px"/>
                </div>
                <h2
                className='text-xl font-bold'
                >{title}</h2>
            </div>
        </NavLink>
    );
}

export default PostCard;