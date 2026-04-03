const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send("hola amigoo!!");
})

app.get('/profile', (req, res)=>{
    res.send("profile amigoo");
    console.log("profile uhh!!");
})

app.get('/saved', (req, res)=>{
    res.send("saved")
    console.log("saved data")
});

app.listen(5000, ()=>{
    console.log("hello hii...");
})