const select = () => "select * from articles"

const analytics = () => {
    return "if((select count(*) from analyst where Day(dateAnalyst) = Day(GETDATE()) and MONTH(dateAnalyst) = MONTH(GETDATE()) and YEAR(dateAnalyst) = YEAR(GETDATE()))=0)"
    + " insert into  analyst(quantity, dateAnalyst) values(1,GETDATE())"
    + " else"
	+ " update analyst"
	+ " set quantity=quantity+1"
	+ " where Day(dateAnalyst) = Day(GETDATE()) and MONTH(dateAnalyst) = MONTH(GETDATE()) and YEAR(dateAnalyst) = YEAR(GETDATE())"
}
const selectId = (id) => "select * from articles where articleId = " + id

const selectAnalytics = () => "select * from analyst"

const insert = (checknew,content,title,imagenew,create_time,userId,cateId) => {

    console.log("insert into articles values ("+checknew+",N'"+content+"',N'"+title+"','"+imagenew+"','"
    +create_time+"',"+userId+","+cateId+")")

    return "insert into articles values ("+checknew+",N'"+content+"',N'"+title+"','"+imagenew+"','"
    +create_time+"',"+userId+","+cateId+")"
}
const deleteAr = (id) => {
    return "delete comments where articleId =" + id
    + "delete from articles where articleId = " + id
    // dinhs khoas ngoaij cmt owr ddaay
}
const update = (id) => {
    return "update articles set checknew = 0 where articleId =" + id
}

module.exports = {
    select,
    analytics,
    selectId,
    deleteAr,
    insert,
    update,
    selectAnalytics
}