const express = require("express");
const router = express.Router();
const { connectSQL } = require("../config");
const {
  select,
  insert,
  updateCategorie,
  deleteAr,
} = require("../SQL/queryCategories");

// get all articles
router.get("/", (req, res) => {
  connectSQL(select())
    .then((item) => {
      res.send(item);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {});

router.put("/", (req, res) => {
  const { cateId, cateName } = req.body;
  connectSQL(updateCategorie(cateId, cateName))
    .then((item) => res.status(200).json(item))
    .catch((err) => console.log(err));
});

// router.delete('/:id',(req,res) =>{
//     let id = req.params.id
//     connectSQL(queryDeleteArtiles(id))
//     .then((item)=>{
//         res.send(item)
//     })
//     .catch(err=>console.log(err))
// })

module.exports = router;
