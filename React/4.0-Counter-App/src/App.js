import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import { useState } from 'react';

function App() {
    let val = 0;
    return (
        <div className="wrapper">
            <h2>Increment And Decrement</h2>
            <Content val={val}></Content>
        </div>
    );
}

export default App;
