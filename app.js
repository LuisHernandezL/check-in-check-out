//Import the framework
const express = require('express');

//Routers
const { recordRouter } = require('./routes/records.routes');
//Utils
const { db } = require('./utils/database.util');
//Init express app
const app = express();

//Use for server
app.use(express.json());

//http://localhost:4000/records
app.use('/records', recordRouter);

//Authenticate and sync the data base 
db.authenticate()
    .then(()=>console.log('db authenticated'))
    .catch(err => console.log(err));

db.sync()
    .then(()=>console.log('database Sync'))
    .catch(err => console.log(err));

//Server on listen (assinging the port)

app.listen(4000,()=>{
    console.log('express app running!');
});