import logo from './logo.svg';
import './App.css';
import {apiUrl,filterData} from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Loader from './components/Loader'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function App() {

	const [courses,setCourses] = useState([]);
    const [loading,setLoading] = useState(true);
    const [category,setCategory] = useState(filterData[0].title);

    async function fetchData(){
        setLoading(true);
        try{
            let res = await fetch(apiUrl);
            let output = await res.json();
            setCourses(output.data);
        }
        catch(e){
            toast.error('Something went wrong');
        }
        setLoading(false);
    }

	useEffect( () => {
        fetchData();
	},[]);

	return (
		<div className="App">
			<div>
                <Navbar />
            </div>

            <div className='content'>
                <div>
                    <Filter 
                        filterData = {filterData}
                        category = {category}
                        setCategory = {setCategory}/>
                </div>

                <div className='courseCards'>
                    {loading ? (<Loader />) : (<Cards courses = {courses} category={category}/>)}
                </div>
            </div>
		</div>
	);
}

export default App;
