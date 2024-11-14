import {useEffect, useState } from "react";
import Navbar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import axios from 'axios';



const Todos = () => {

    const keys = ['Home', ' Todos',' About us', 'Auth Form'];
    
    const [todos, setBlogs] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/todos/";


    const fetchTodos = async () => {

            try{
                const todos = await axios.get(url);
                setBlogs(todos?.data);
            }catch(error)            {
                console.error("Error occured while fetching todos", error.message);
            }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return ( 
        <>
        <Navbar keys={keys}/>
        <h1>Todos</h1>
        <div className="flex flex-col items-center">
            {todos && 
            todos?.map((todo)=> (

                <div key={todo.id} className="bg-lime-200 mt-10 rounded-md px-8 py-2 w-1/2 flex items-center space-x-4">
                    <h2 className="font-bold text-lg">{todo.title}</h2>
                    <p>{todo.completed.toString()}</p>
                    <button onClick={() => {}}>Click</button>
                </div>
            ))}
            
        </div>
        <Footer/>
        </>
     );
}
 
export default Todos;