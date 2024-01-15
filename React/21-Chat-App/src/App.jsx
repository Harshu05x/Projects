import React, { useReducer } from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Error from './pages/Error';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login } from './redux/features/AuthSlice';

function App(props) {
    const dispacth = useDispatch();
    const navigate = useNavigate();

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            dispacth(login(user));
        })
    },[]);
    
    const {currentUser} = useSelector((store) => store.auth);
    console.log(currentUser);

    const ProtectedRoute = ({children}) => {
        if(!currentUser)
            return <Navigate to={'/login'}/>
        return children;
    }

    return (
        <div className=''>
            <Routes>
                <Route path='/'>
                    <Route index element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>}/>
                    <Route path='login' element={<Login />}/>
                    <Route path='signup' element={<Signup />}/>
                    <Route path='*' element={<Error />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;