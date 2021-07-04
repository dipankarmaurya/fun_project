const express = require('express');
const port = 4444;


const app =express();
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'));
app.listen(port,(err)=>{
 if(err){
     throw err;
 }
 console.log(`server is running on port : ${port}`);
});