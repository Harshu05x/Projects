import React, { useState, useEffect } from 'react';
import { TodoProvider } from './Context/AppContext';
import bgImg  from "./assets/to-do-bg.jpg"
import {TodoForm , TodoItem} from "./Components/index"

function App(props) {
    const [todos,setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos((prev)=> [...prev, {id: Date.now(), ...todo}]);
    }

    const updateTodo = (id, todo) => {
        setTodos((prev)=> 
            prev.map(prevTodo => 
                prevTodo.id === id ? todo : prevTodo
        ));
    }

    const deleteTodo = (id) => {
        setTodos((prev)=> prev.filter(prevTodo => prevTodo.id !== id));
    }

    const toggleComplete = (id) => {
        setTodos((prev)=> 
            prev.map(prevTodo => 
                prevTodo.id === id? {...prevTodo, completed:!prevTodo.completed} : prevTodo
        ));
    }

    useEffect( () => {
        const localTodos = JSON.parse( localStorage.getItem("todos"));
        console.log(localTodos);

        if(localTodos && localTodos.length > 0)
            setTodos(localTodos);

    },[]);

    useEffect( () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos]);

    return ( 
            <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
                <div className="min-h-screen py-8"
                style={
                    {
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }
                }>
                    <div className="w-full max-w-2xl mx-auto shadow-lg shadow-slate-900 rounded-lg px-4 py-3 text-white bg-slate-500">
                        <h1 className="text-2xl font-bold text-center mb-6 mt-2">Get Things Done !</h1>
                        <div className="mb-4">
                            {/* Todo form goes here */} 
                            <TodoForm />
                        </div>
                        <div className="flex flex-wrap gap-y-3">
                            {/*Loop and Add TodoItem here */}
                            <div className=' w-full'>
                                {
                                    todos.map(todo => (
                                        <TodoItem key={todo.id} todo={todo} className=" w-full"/>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </TodoProvider>
    );
}

export default App;