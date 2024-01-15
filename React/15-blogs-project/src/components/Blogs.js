import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';

function Blogs(props) {

    // consumeing the data using useContext Hook
    const {posts,loading} = useContext(AppContext);
    
    return (
        <div className='w-11/12 max-w-[600px] flex flex-col justify-center items-center mb-16'>
            {
                loading ? (<Spinner />) : 
                (
                    posts.length === 0 ? 
                    (
                        <div>
                            <p>No Post Found</p>
                        </div>  
                    ) : 
                    (
                        posts.map( (post) => (<Card post={post} key={post.id}/>))
                    )
                )
            }        
        </div>
    );
}

export default Blogs;