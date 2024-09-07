const express = require("express");
const { createTodo, updateTodo } = require("./types");
 
const {todo}  = require("./db")

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());



app.post('/todo', async function(req, res){

    const createPayload = req.body;

    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){

        res.status(411).json({msg: "You have sent the wrong inputs"})

        return;
    }

    await todo.create({

        title: createPayload.title,

        description: createPayload.description,

        completed: false




    })

    res.status(200).json({
        msg: "Todo added"
    })


})


app.get('/todos', async function(req, res){


    const todos = await todo.find({});

    res.json({todos})

    
})

app.put('/completed', async function(req, res){


    const createPayload = req.body;

    const parsedPayload = updateTodo.safeParse(createPayload);

    if(!parsedPayload.success){

        res.status(400).json({msg: "You have sent the wrong inputs"})

        return;
    }

    const find = await todo.findOne({

        _id: createPayload.id
    })

    console.log(find);

    if(find){

      
        await todo.updateOne({

            _id: createPayload.id
        }, 
    
    {

        completed: true
    })


    res.status(200).json({

        msg: "Todo marked as completed"
    })


    }

 
    




})


app.put('/undo', async function(req, res){

    const createPayload = req.body;

    const parsedPayload = updateTodo.safeParse(createPayload);

    await todo.updateOne({


        _id: createPayload.id


    }, {

        completed: false
    })

    res.status(200).json({


        msg: "Todo marked as not completed"
    })


})


app.put('/change', async function(req, res){

    const createPayload = req.body;

    const parsedPayload = updateTodo.safeParse(createPayload);

    if(!parsedPayload.success){

        res.status(400).json({msg: "You sent the wrong inputs"})

        return;
    }

    const toodoo = await todo.findOne({

        _id: createPayload.id


    })

    console.log(toodoo);
    

    if(toodoo.completed){

        await todo.updateOne({

            _id: createPayload.id
        }, 
    
    {
        completed: false

    })
    }

    
    if(!toodoo.completed){

        await todo.updateOne({

            _id: createPayload.id
        }, 
    
    {
        completed: true

    })
    }


})

app.listen(3000)

