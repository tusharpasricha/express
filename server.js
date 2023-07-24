const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    console.log("here")
    //res.sendStatus(500)
   // res.status(500).send("Hi"); 
   // res.status(500).json({message : "Error"})
   //res.json({message : "Error"})
   //res.download("server.js")
   //res.render('index')
    res.send('hi');
})

app.listen(3000);