import logo from './logo.svg';
import './App.css';
import Testimoinal from './components/Testimoinal';
import reviews from './data'

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-300 w-[100vw] h-[100vh]">
        
        <div className=" text-center">
        
            <h2 className="font-bold text-4xl">Our Testimonials</h2>
        
            <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>   
        
            <Testimoinal reviews={reviews}/> 
        </div>
    </div>
  );
}

export default App;
