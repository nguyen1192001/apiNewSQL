const express = require("express");
const router = express.Router();
const { connectSQL } = require("../config");
const check = require("./CheckNatureLanguage");
const {
  insertComment,
  selectCommentById,
  selectComment,
} = require("../SQL/queryComment");

router.get("/allcommnet",(req, res) => {
  connectSQL(selectComment())
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => console.log(err));
})

// get all articles
router.get("/", (req, res) => {
  connectSQL(selectCommentById(req.query.articleId))
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const dataComment = req.body;
  
  let checkLGcmt = check.checkNatureLanguage(dataComment.cmt_Content);
  console.log(">>>>>>checkLGcmt",checkLGcmt)
  if (checkLGcmt === 1) {
    console.log("check thanhf coong");
    return res.json({
      error: true,
    });
  } else {
    connectSQL(insertComment(dataComment))
      .then((item) => res.status(200).json(item))
      .catch((err) => console.log("errpost commnet", err));
  }
});

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
