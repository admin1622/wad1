const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.sendFile('/code/index.html', {root: __dirname});
});
app.get('/about',(req,res)=>{
    res.sendFile('/code/about.html', {root: __dirname});
});
app.get('/contact',(req,res)=>{
    res.sendFile('/code/contact.html', {root: __dirname});

});
app.listen(port,(res,req)=>{
    console.log('listening to port 3000');
}); 