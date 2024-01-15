import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

function Home(props) {
    return (
        <div className='App w-full h-full flex flex-col justify-center items-center Home'>
            <Header></Header>
            <Blogs></Blogs>
            <Pagination></Pagination>
        </div>
    );
}

export default Home;