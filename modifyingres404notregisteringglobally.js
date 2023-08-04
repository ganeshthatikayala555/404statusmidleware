var express=require('express');
const app=express();
//custom midleware
//setting 404 statuscode and sending a mesage for mymidleware
function mymidleware(req,res,next){
    ////sending 404 not found message,,,,,=>the route handlers which are registered with this mymidleware will give router not found,,and others will give their own outputs
  
    res.status(404).send("router not found");
    ////calling next midleware or router 
    next();
  
}
////here midleware not registered
app.get('/normal',(req,res)=>{
    res.send("this is normal router");
});
////midleware registered for only /special router

app.get('/special',mymidleware,(req,res)=>{
     res.send("this is special router");
});
app.get('/normal2',(req,res)=>{
    res.send("this is normal router");
});
app.get('/special2',mymidleware,(req,res)=>{
    res.send("this is special router");
});

app.listen(6016,()=>{
    console.log("listening");
});

///localhost:6015/special====>router not found
//localhost:6015/normal====>this is normal router
//localhost:6015/normal2//localhost:6015/normal====>this is normal router====>this is normal router
