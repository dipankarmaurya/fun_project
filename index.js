const express = require('express');
const port = 4444;
const path =require('path');
const db = require('./config/mongoose');
const Todo = require('./models/todolist.js');
const app =express();
// seting ejs view engine
app.set('view engine','ejs');
app.set('views','./views');
// using form value
app.use(express.urlencoded());
//serving static files
app.use(express.static('./assets'));
// seting routes
app.use('/',require('./routes'));
app.listen(port,(err)=>{
 if(err){
     throw err;
 }
 console.log(`server is running on port : ${port}`);
});
