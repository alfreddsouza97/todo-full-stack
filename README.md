## Fullstack Todo Application with MongoDB, React.js, Express.JS, Node.JS, JSON, ZOD, Axios

-- Application polls the mongoDb database to give you updated list of todos 
-- You can mark each todo as completed by clicking on mark as done button which inturn marks the todo completion as true in mongoDB database
-- Functionality is provided to undo and you can re mark the todo completion as done or pending by clicking on the mark as done/completed button again, this polls the mongodb database and changes the database entry for todo completion status.
-- You can add a new todo by filling the title, description and by clicking on submit button.
-- make sure to post your own mongo db connection string in backend/db.js
-- make sure to have NodeJS installed on your computer
open the folder in VS Code and launch two terminals -- one to run frontend and other to run backend

terminal1--- 
cd frontend        
npm install
npm run dev

terminal2--
cd backend
npm install
node index.js