const express = require("express");
const router = express.Router();
const { connectSQL } = require("../config");
const {
  selectAventisment,
  updateAventisment,
  deleteAventisment,
  getOneAventisment,
  selectMainAver,
  insertDetailAv,
  insertAv,
} = require("../SQL/queryAvertisment");

// get all articles
router.get("/", (req, res) => {
  connectSQL(selectAventisment())
    .then((item) => {
      // item.map((k)=>{
      //     res.send(k.advertisment_firsttime)
      // })
      res.send(item);
    })
    .catch((err) => console.log(err));
});

router.get("/mainAv", (req, res) => {
  connectSQL(selectMainAver())
    .then((item) => {
      res.send(item);
    })
    .catch((err) => console.log(err));
});

router.post("/mainAv", (req, res) => {
  let { AvId, title, image, linkAv, startAv, endAv } = req.body;
  console.log("start date ,", startAv, "endDate,", endAv);
  //Date.parse('01/01/2011 10:20:45') > Date.parse('01/01/2011 5:10:10')
  let today = new Date();
  let date = (today.getMonth() + 1)  + "/" + today.getDate() + "/" +  today.getFullYear()
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const currentTime = date +" "+time
  let checkValid = 0 ;
  checkValid = (Date.parse(currentTime) > Date.parse(endAv)) ? 0 : 1
  startAv = startAv.split('T')[0] + " " + startAv.split('T')[1]
  endAv = endAv.split('T')[0] + " " + endAv.split('T')[1]
  connectSQL(insertDetailAv(AvId, title, image, linkAv, startAv, endAv , checkValid))
  .then((item) => {
      res.send(item)
  })
  .catch(err => console.log(err))
});
router.post("/", (req, res) => {
  const { UserId, Agreement } = req.body;

  connectSQL(insertAv(UserId, Agreement))
    .then((item) => {
      res.send(item);
    })
    .catch((err) => console.log(err));
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(">>>>>>>.", id);
  connectSQL(getOneAventisment(id))
    .then((item) => {
      res.send(item);
    })
    .catch((err) => console.log(err));
});
router.put("/", (req, res) => {
  const {
    title,
    imageAd: image,
    linkAd: link,
    detailsAdId: id,
    checkAd,
  } = req.body;
  console.log("values update", req.body);
  connectSQL(updateAventisment(title, image, link, id, checkAd))
    .then((item) => {
      res.send(item);
    })
    .catch((err) => console.log(err));
});

router.delete("/", (req, res) => {
  console.log("req.params", req.query);
  connectSQL(deleteAventisment(req.query))
    .then((item) => {
      res.send(item);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
