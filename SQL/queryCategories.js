const select = () => "select * from categories"

// ,userId,cateId
const insert = (checknew,content,title,imagenew,create_time) => {
    return "insert into articles values ('" +checknew+"','"+content+"','"+title+"','"+imagenew+"','"
    +create_time+"',"+ "NULL,NULL" +")"
}
const deleteAr = (id) => {
    return "delete from articles where articleId = " + id
}
const updateCategorie = (cateId , cateName) => "update categories set cate_Name = 'N"+ cateName +"' where cateId = " +cateId 



module.exports = {
    select,
    deleteAr,
    insert,
    updateCategorie
}