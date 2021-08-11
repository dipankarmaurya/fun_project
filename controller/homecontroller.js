
const Todo = require('../models/todolist');

module.exports.home =(req,res)=>{
     
    Todo.find({},(err ,todo)=>{
        if(err){
            console.log(err);
            return;
        }
            
       console.log("*******",todo); 
       return res.render("home",{
        title:"Home",
        todos_list:todo
    });
    
    });
}
module.exports.createTodo=(req,res)=>{
    Todo.create({
        work:req.body.work,
        category:req.body.category
    } ,function(err,newTodo){
        if(err)
        throw err;
        console.log("*****",newTodo);
        return res.redirect('back');
    });
}

module.exports.deleteTodo=(req,res)=>{
   
    let id =req.query.id;
    console.log(id);
    Todo.findByIdAndDelete(id,(err)=>{
       if(err){
           console.log(err);
       }
       res.end("<h1>delete here</h1>");
         return res.redirect("back");

    });
}