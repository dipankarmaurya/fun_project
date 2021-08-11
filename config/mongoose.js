const mongoose =require('mongoose');
// mongoose.connection();
mongoose.connect('mongodb://localhost/Todo_list_db');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("connected to database");
});