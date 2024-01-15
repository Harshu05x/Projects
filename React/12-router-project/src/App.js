import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App(){

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
        <div className=' w-[100vw] h-[100vh] bg-[#010B13] flex flex-col'>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<LogIn setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route path='/dashboard' element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <Dashboard />
                    </PrivateRoute>
                }/>
            </Routes>
        </div>
    )
}

export default App;
