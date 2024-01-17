const express=require('express');
const app=express()
const {Gdawg}=require("./sqlmodel")
const path=require("path")
const bodyParser=require("body-parser");
require("dotenv").config()
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get(("/"), (req, res)=>{
    res.sendFile(path.join(__dirname,"html/index.html"))
})
app.get("/gdawg/:id/", (req, res)=>{
    res.sendFile(path.join(__dirname+"html/gdawg.html"))
})
app.get("/api/gdawg/:id/", (req, res)=>{
    res.json(Gdawg.findAll({
        where: {
            id: parseInt(req.params.id)
        }
    }))
})
app.post("/api/newGdawg/", (req, res)=>{
    const newdawg = Gdawg.create({
        name: req.body.firstname+" "+req.body.lastname,
        pic: req.body.picb64,
        desc: req.body.desc,
        picdesc: req.body.desc,
    })
    res.sendStatus(200)
})



app.listen(6969, ()=>{
    console.log("localhost:6969/")
})