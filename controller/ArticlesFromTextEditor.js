const express = require('express')
const req = require('express/lib/request')
const router = express.Router()
const {connectSQL} = require('../config')
const {select,deleteAr,insert,selectId, update,analytics} = require('../SQL/queryArticles')

// get all articles
router.get('/',(req,res) =>{
    connectSQL(select())
    .then((item)=>{
        res.send(item)
        connectSQL(analytics())
        .then(()=>{
            res.send("success")
        })
        .catch((err)=>{
            console.log("err",err)
        })
    })
    .catch(err=>console.log(err))
})
router.get('/:id',(req,res) =>{
    const id = req.params.id
    connectSQL(selectId(id))
    .then((item)=>{
        res.send(item)
    })
    .catch(err=>console.log(err))
})
router.post('/',(req,res)=>{
    const data = req.body
    connectSQL(insert(data.check,data.content,data.title,data.image,data.create_time,data.user_Id,data.cate_Id))
    .then((item)=>{
        res.send(item)
    })
    .catch(err=>console.log("errer",err))
})

router.put('/:id',(req,res)=>{
    const id = req.params.id
    console.log("id>>>>>>>.",id)
    connectSQL(update(id))
    .then((item)=>{
        res.send(item)
    })
    .catch(err=>console.log("errer",err))
})
router.delete('/:id',(req,res) =>{
    let id = req.params.id
    connectSQL(deleteAr(id))
    .then((item)=>{
        res.send(item)
    })
    .catch(err=>console.log(err))
})

module.exports = router