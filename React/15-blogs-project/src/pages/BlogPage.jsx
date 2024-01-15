import React, { useContext, useEffect, useState } from 'react';
import {AppContext} from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import {useLocation, useNavigate, useNavigation} from 'react-router-dom';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

function BlogPage(props) {
    const {loading,setLoading} = useContext(AppContext);
    const [blog,setBlog] = useState(null);
    const [relatedBlog,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const blogId = location.pathname.split('/').at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    
    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

        } catch (error) {
            alert("Blog ID does not found");
            setBlog(null);
            setRelatedBlogs([]);           
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId)
            fetchRelatedBlogs();
    },[loading.pathname,blogId]);

    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-y-4 BlogPage'>
            <Header />
            <div className='max-w-[600px]  mt-24'>
                <div>
                    <button className='rounded-md px-4 py-1 border border-black mr-2 bg-gray-200'
                    onClick={ () => navigate(-1)}> Back</button>
                </div>
                <div className=' flex w-[600px] flex-col justify-center items-center'>
                    {
                        loading ? 
                        (<Spinner />) : 
                        (
                            !blog ? 
                            (<p>Page Not Found</p>) : 
                            (
                                <div> 
                                    <Card post={blog}/>
                                    <h2 className=' text-[40px] font-bold' >Related Blogs</h2>
                                    {
                                        relatedBlog.map( (post) => (
                                            <Card post={post} key={post.id}/>
                                        ))
                                    }
                                
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default BlogPage;