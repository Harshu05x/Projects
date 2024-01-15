import { useState } from 'react';
import './App.css'
import ColorChanger from './components/ColorChanger';

function App() {

    const [color,setColor] = useState("000")

    return (
        <div className={` w-full h-screen flex flex-col justify-between items-center text-white py-12`}
        style={
            {
                backgroundColor: `${color}`
            }
        }>
            <p className=' text-black text-3xl font-semibold'>React Background Changer</p>
            <ColorChanger setColor={setColor}/>
        </div>
    )
}

export default App;
