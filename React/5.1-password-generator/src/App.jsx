import { useState } from 'react';
import './App.css'
import Generator from './components/Generator';

function App() {


    return (
        <div className={`w-full h-screen flex flex-col justify-center items-center bg-purple-200 gap-y-5`}>
            <h1 className=' text-3xl font-semibold'>Password Generator</h1>
            <Generator />
        </div>
    )
}

export default App;
