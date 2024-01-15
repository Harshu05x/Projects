import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";



// 1] Create and export Context
export const AppContext = createContext();

// 2] create provide function which provides the context data
function AppContextProvider({children}){

    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [posts,setPosts] = useState([]);
    const [totalPages,setTotalpages] = useState(null);
    const navigate = useNavigate();


    async function fetchBlogPosts(page = 1, tag = null, category = null){
        let url = `${baseUrl}?page=${page}`;

        if(tag)
            url += `&tag=${tag}`;
        if(category)
            url += `&category=${category}`;
        
        setLoading(true);
        try{
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalpages(data.totalPages);
        }
        catch(e){
            alert("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalpages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        navigate({search : `?page=${page}`});
        setPage(page);
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalpages,
        fetchBlogPosts,
        handlePageChange
    };

    // providing data to children components
    return <AppContext.Provider value={value} >
                {children}
            </AppContext.Provider>
}

export default AppContextProvider;
