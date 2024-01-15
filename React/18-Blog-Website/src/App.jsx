import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import authService from "./appwrite/Auth"
import {login,logout} from "./store/slices/AuthSlice";
import { Header,Footer,Loader} from "./components/index"
import { Outlet } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect( () =>{
        authService.getCurrentUser()
        .then( (userData) => {
            if(userData)
                dispatch(login(userData));
            else
                dispatch(logout());
        })
        .finally( () => setLoading(false));
    },[])

    return !loading ? 
    (
        <div className=" min-h-screen flex flex-wrap content-between bg-gray-400">
            <div className=" w-full block">
                <Header />
                <main className=" min-h-[60vh]">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
    : 
    (<Loader />)
}

export default App;
