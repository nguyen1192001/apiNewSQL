const selectAventisment = () =>
  "select dt.detailsAdId ,dt.checkAd , av.advertismentId, u.full_name , av.agreement, dt.title,dt.imageAd,dt.linkAd,dt.advertisment_firsttime,dt.advertisment_endTime" +
  " from advertisment av , detailsAd dt , usernew u" +
  " where av.advertismentId = dt.advertismentId and av.userId = u.userId";

const updateAventisment = (title, image, link, id, checkAd) => {
  return (
    "update detailsAd set title = '" +
    title +
    "', imageAd= '" +
    image +
    "',linkAd = '" +
    link +
    "'," +
    "checkAd =" +
    checkAd +
    "where detailsAdId = " +
    id
  );
};
const deleteAventisment = (id) => {
  console.log("query","delete from detailsAd" +
  " where detailsAdId = " +
  id.detailsAdId +
  " " +
  "delete from advertisment " +
  "where advertismentId = " +
  id.advertismentId)
  return (
    "delete from detailsAd" +
    " where detailsAdId = " +
    id.detailsAdId +
    " " +
    "delete from advertisment " +
    "where advertismentId = " +
    id.advertismentId
  );
};

const getOneAventisment = (id) => {
  return "select * from advertisment where advertismentId =" + id;
};
const selectMainAver = () =>{
    return "select * from advertisment"
}

const insertDetailAv = (idav,title,image,linkav,start,end,checkValid) => {
  console.log("query","insert into detailsAd values("+idav+",N'"+ title+"','"+image+"','"+linkav+"','"+start+"','"+end+"',"+checkValid+")")
    return "insert into detailsAd values("+idav+",N'"+ title+"','"+image+"','"+linkav+"','"+start+"','"+end+"',"+checkValid+")"
}
const insertAv = (UserId, Agreement)=>{
    return "insert into advertisment values ("+UserId+",'"+Agreement+"')"
}

module.exports = {
  deleteAventisment,
  updateAventisment,
  selectAventisment,
  getOneAventisment,
  selectMainAver,
  insertDetailAv,
  insertAv
};
