const express = require('express')
const router = express.Router()
const { connectSQL } = require('../config')
const { selectAnalytics } = require('../SQL/queryArticles')
const { select, insert,update, deleteUser,selectUse } = require('../SQL/queryUser')

// get all articles
router.get('/', (req, res) => {
    connectSQL(select())
        .then((item) => {
            res.send(item)
        })
        .catch(err => console.log(err))
})
router.get('/analytic',(req,res)=>{
    connectSQL(selectAnalytics())
    .then((item) => res.json(item))
    .catch((error) => {
        console.log("error", error)
    })
})
router.get('/SelfDefUser', (req, res) => {
    connectSQL(selectUse())
        .then((item) => {
            res.send(item)
        })
        .catch(err => console.log(err))
})
router.post('/', (req, res) => {
    let user = req.body
    console.log("user>>>>>", user)
    if (user.userName == "" ||
        user.email == "" || user.password == "" || user.full_name == "" || user.avatar == "" || user.self_des == "") {
        return res.json({
            error: true
        })
    } else {
        connectSQL(insert(user.userName, user.email, user.password, user.full_name, user.avatar, user.self_des))
            .then((item) => {
                res.send(item)
            })
            .catch(err => console.log(err))
    }
})
router.put('/',(req,res)=>{

    const {id , changeUser} = req.body;
    connectSQL(update(changeUser,id))
    .then((item) => {
        res.send(item)
    })
    .catch(err => console.log(err))
})

router.delete('/:id',(req,res) =>{
    let id = req.params.id
    connectSQL(deleteUser(id))
    .then((item)=>{
        res.send(item)
    })
    .catch(err=>console.log(err))
})

module.exports = router