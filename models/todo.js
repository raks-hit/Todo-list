const mongoose=require('mongoose')
const todoSchema=new mongoose.Schema({
    todo:{type:String,required:true},
        date :{type:String,required:true},
        time:{type:String,required:true}
    
})
const todo=mongoose.model('todo',todoSchema);
module.exports=todo;