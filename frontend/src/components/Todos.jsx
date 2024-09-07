import axios from "axios";
import { useState, useEffect } from "react";



export function Todos(){

    const [todos, setTodos] = useState([]);


    axios.get("http://localhost:3000/todos")

    .then(function(response){

        setTodos(response.data.todos)
    })


    return <div>

        {todos.map(function(todo){

            return <div>

                
                <h3>_id: {todo._id}</h3>


                <h1>title: {todo.title}</h1>

                <h2>description: {todo.description}</h2>

                <h3>completed: {JSON.stringify(todo.completed)}</h3>

                <button onClick={function(){

                    axios.put("http://localhost:3000/change", 

                        {

                            id: todo._id
                        }


                    ).then(function(e){

                        console.log(e);
                        

                        console.log("changed");
                        


                    }).catch({function(e){

                        console.log(e);
                        
                    }})



                }}>{(todo.completed)==true? "Completed" : "Mark as DONE"}</button>

                <h1>--------------------------------------------------------------------------------------------------</h1>


            </div>
        })}

       

        


        
    </div>


}