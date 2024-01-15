import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

function TagPage(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div className='w-full h-full flex flex-col justify-center items-center '>
            <Header />
        <div >
            <div className='TagPageHeader'>
                    <button className=' rounded-md px-4 py-1 border border-black mr-2 bg-gray-200'
                    onClick={() => {
                        navigate(-1);
                    }}>
                        Back
                    </button>
                    <p>Blogs Tagged <span className=' text-blue-500 underline'>#{tag} </span></p>
                </div>
        </div>
            <Blogs />
            <Pagination />
        </div>
    );
}

export default TagPage;