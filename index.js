const express=require('express');
const app=express()
const {Gdawg}=require("./sqlmodel")
const path=require("path")
const bodyParser=require("body-parser");
const api=require("./api")
require("dotenv").config()
app.use(express.static(path.join(__dirname+"/public")))
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb"  }))
app.use(bodyParser.json({limit: "50mb" }))

app.get(("/"), (req, res)=>{
    res.sendFile(path.join(__dirname,"/html/index.html"))
})
app.get("/gdawg/:id/", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/gdawg.html"))
})
app.get('/admin/newGdawg/', (req, res)=>{
    res.sendFile(__dirname+"/html/newgdawg.html")
})
app.use('/api', api)
//do not put any code below this
app.get("*", (req, res)=>{
    res.status(404).send("Does not exist")
})

app.listen(6969, ()=>{
    console.log("http://localhost:6969/")
})