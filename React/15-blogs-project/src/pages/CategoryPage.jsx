import React from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

function CategoryPage(props) {
    const navigate = useNavigate();
    const loaction = useLocation();
    const category = loaction.pathname.split('/').at(-1);
    return (
        <div className='App w-full h-full flex flex-col justify-center items-center gap-y-4'>
            <Header />
            <div className='CategoryPageHeader'>
                <button className=' rounded-md px-4 py-1 border border-black mr-2 bg-gray-200'
                onClick={() => {
                    navigate(-1);
                }}>
                    Back
                </button>
                <p className='font-bold'>Blogs On <span className=' underline'>{category} </span></p>
            </div>
            <Blogs />
            <Pagination />
        </div>
    );
}

export default CategoryPage;