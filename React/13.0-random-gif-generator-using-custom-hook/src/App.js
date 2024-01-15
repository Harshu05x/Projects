import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="backgound w-full max-h-max flex flex-col items-center">
        <h1 className="bg-white w-11/12 rounded-lg mt-[20px] 
        px-10 py-3 text-center text-3xl font-bold">RANDOM GIFS</h1>
    
        <div className="flex flex-col w-full items-center">
            <Random />
            <Tag />
        </div>
    </div>
  );
}

export default App;
