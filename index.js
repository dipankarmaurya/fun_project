const express = require('express');
const port = 4444;
const path =require('path');

const app =express();
// seting ejs view engine
app.set('view engine','ejs');
app.set('views','./views');
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