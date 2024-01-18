const express=require("express")
const api=express.Router()
api.get("/gdawg/:id/", (req, res)=>{
    const x=Gdawg.findAll({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if(Object.keys(x).length === 0){
        res.json({
            exists: false
        })
    }else{
        res.json(x)
    }
})
api.post("/newGdawg/", (req, res)=>{
    const newdawg = Gdawg.create({
        name: req.body.firstname+" "+req.body.lastname,
        pic: req.body.picb64,
        desc: req.body.desc,
        picdesc: req.body.desc,
    })
    res.sendStatus(200)
})

module.exports=api