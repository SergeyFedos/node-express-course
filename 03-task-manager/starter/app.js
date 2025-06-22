require('./db/connect')
const express = require('express')
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
// since we'll be sending json from our app, since we want to acces that data in our routes we need get middleware that is built in express, (if we dont't use this, then we won't have data in req.body )
app.use(express.json()); 
app.use(express.static('./public'))



// routes


app.use('/api/v1/tasks', tasks)






const port = 3000;

// we set up fuction start if connection to db is succesfull only then we start the server

const start = async() => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }

}

start();

// app.get('/api/v1/tasks')  -- get all the tasks
// app.post('/api/v1/tasks')  -- create a new task 
// app.get('/api/v1/tasks/:id')  -- get single task
// app.patch('/api/v1/tasks/:id')  -- update task
// app.delete('/api/v1/tasks/:id')  -- delete task