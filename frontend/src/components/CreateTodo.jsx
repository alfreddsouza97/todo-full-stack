import { useState } from "react"

import axios from "axios";




export function Create(){


    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    



    return <div>


        <input className='inp' type="text" placeholder="title" onChange={function(e){

            setTitle(e.target.value);
        }}/>

        <br />

        <br />

        <input className='inp' type="text" placeholder="description" onChange={function(e){

            setDescription(e.target.value);
        }} />

        <br />

        <br />

        <button onClick={function(){

            axios.post('http://localhost:3000/todo', 

                {

                    title: title,

                    description: description
                })

                .then(function(response){

                    alert("Todo added")

                    console.log("todo added , response : ", response);
                    
                })

                .catch(function(error){

                    console.log(error);
                    
                })


            






        }}>Submit</button>
    </div>


    

    
}

