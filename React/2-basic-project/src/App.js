import logo from './logo.svg';
import './App.css';
import Products from './components/Products';

function App() {
    const products = [
        {
        name: "Nirma",
        date: new Date(2022,9,28)
        },
        {
        name: "Surf",
        date: new Date(2020,10,12)
        },
        {
        name: "Wheel",
        date: new Date(2018,1,5)
        },
        {
        name: "Arial",
        date: new Date(2016,4,15)
        }
    ]
  return (
    <div className="mainDiv">
        <Products items={products}></Products>        
    </div>
  );
}

export default App;
