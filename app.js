const express=require('express')
const path=require('path')
const port=80;
const app=express();
const db=require('./config/mongoose');
const todo = require('./models/todo');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded())
app.get('/',(req,res)=>{
    todo.find({},function(err,todo){
        if(err){
        console.log('error')
        return ;
        }
return   res.render('index',{title:"todolist",todolist:todo})

    })
  
})
app.post('/post',(req,res)=>{
    todo.create({
        todo:req.body.todo,
        date:req.body.date,
        time:req.body.time
    },function(err,newcontact){
        if(err){
            console.log("error")
            return;
        }
        console.log('*******',newcontact);
        return res.redirect('back')
    }
    )
   
})
app.get('/delete',(req,res)=>{
    // let phone=req.params.phone;
    // let contactindex=contactList.findIndex(contact=>contact.phone==phone)
    // if(contactindex!=-1){
    //     contactList.splice(contactindex,1)
    // }
    let id=req.query.id;
    todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error')
            return;
        }
        console.log("delete")
        return res.redirect('back')
    })
   
})

app.listen(port,()=>{
    console.log("successfully running on "+ port);
})