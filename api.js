const express=require("express")
const api=express.Router()
const {Gdawg}=require("./sqlmodel")

api.get("/gdawg/:id", (req, res)=>{
    console.log(req.params.id)
    Gdawg.findAll({
        where: {
            id: parseInt(req.params.id)
        }
    }).then(e=>{
        res.send(JSON.stringify(e))
    }).catch(err=>{
        res.sendStatus(419)
        console.error(err)
    })
    
})
api.post("/newGdawg/", (req, res)=>{
    try{
        const newdawg = Gdawg.create({
            name: req.body.firstname+" "+req.body.lastname,
            pic: req.body.picb64,
            desc: req.body.desc,
            picdesc: req.body.desc,
        })
    }catch(err){
        res.sendStatus(419)
        throw(err)
    }
    res.sendStatus(200)
})

module.exports=api