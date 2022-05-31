const selectCommentById = (id) => "select * from comments where articleId ="+id
const selectComment= (id) => "select * from comments "



const insertComment = (comment) => {
    const {user_Id,article_Id,cmt_Content ,create_Time} = comment
    
    return "insert into comments values ("+user_Id+","+article_Id+",'"+create_Time+"',N'"+cmt_Content+"')"
}


module.exports = {
   insertComment,
   selectCommentById,
   selectComment

}