import React from 'react';
import { NavLink } from 'react-router-dom';

function Card({post}) {
    return (
        <div className='flex flex-col gap-y-3 py-3 border-2 border-black px-3 rounded-md mt-2 mb-2 shadow-sm shadow-black hover:shadow-md hover:shadow-black transition-all duration-200'>
            <div className=' flex justify-between'>
                <div className='felx flex-col'>
                    <NavLink to={`/blog/${post.id}`}>
                        <p className='font-bold'>{post.title}</p>
                    </NavLink>
                    <p className='text-sm'>By <span className=' italic'>{post.author}</span> on 
                    <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}><span className=' font-bold underline'> {post.category}</span></NavLink></p>
                    <p className=' text-sm'>Posted on <span>{post.date}</span></p>
                </div>
                <div>
                    <p className='text-xs font-bold'>ID: {post.id}</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-1'>
                <p className='text-md'>{post.content}</p>
                <p>
                    {
                        post.tags.map( (tag,index) => {
                            return <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}>
                                 <span key={index} 
                                    className=' text-blue-500 underline text-sm mr-2 font-bold'> #{tag} </span>
                            </NavLink>
                        })
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;