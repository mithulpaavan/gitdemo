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

app.post('/login', (req, res)=>{
    res.send("login happened");
    console.log("login happened")
})

app.get('/something', (req, res) => {
    console.log("hello")
})

app.get('yoo', (req, res) => {
    console.log("yoo")
})

//added

app.listen(5000, ()=>{
    console.log("hello hii...");
})