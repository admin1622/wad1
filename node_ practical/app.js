const express=require('express');
const app=express();
const port=3000;

/*const express=require('express');
const path=require('path');
const port=4000;
const app=express();

const publicDirectory=path.join(__dirname,"public");
app.use(express.static(publicDirectory));

app.listen(port,(req,res)=>{
    console.log(`Listening on port ${port}`);
});*/

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
