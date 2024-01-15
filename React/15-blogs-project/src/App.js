import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Blogs from './components/Blogs';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useParams, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';
// import { useSearchParams } from 'react-router-dom';

function App() {
    
    const {fetchBlogPosts} = useContext(AppContext);
    const [searchParams,setSearchParam] = useSearchParams();
    const location = useLocation();
    // console.log(searchParams);

    useEffect( () => {

        const page = searchParams.get("page") ?? 1;
        // console.log(page);

        // showing tag page
        if(location.pathname.includes('tags')){
            const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
            fetchBlogPosts(Number(page), tag);
        }
        // showing category page
        else if(location.pathname.includes('categories')){
            const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
            fetchBlogPosts(Number(page),null,category);
        }
        else{
            fetchBlogPosts(Number(page));
        }
    },[location.pathname,location.search]);
    
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/blog/:blogId' element={<BlogPage />}/>
            <Route path='/tags/:tag' element={<TagPage />}/>
            <Route path='/categories/:category' element={<CategoryPage />}/>
        </Routes>
  );
}

export default App;
