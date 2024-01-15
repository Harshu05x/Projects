import React, { useState } from 'react';
import { useTodo } from '../Context/AppContext';

function TodoForm() {
    
    const [todo,setTodo] = useState("");

    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if(todo.length === 0){
            alert("Please enter something");
            return;
        }
        addTodo({id:Date.now(), todo:todo, completed: false});
        setTodo("");
    }

    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 py-2 outline-none duration-150 bg-white/20"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

