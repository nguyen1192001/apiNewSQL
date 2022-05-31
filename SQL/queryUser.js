const select = () => "select * from usernew"
const selectUse = () => "select * from usernew where self_des = 'user'"


const insert = (userName,email,passwordUser,full_name,avartar,self_des) =>{
    return "insert into usernew values (" + "'"+userName+"','"+email+"','"+passwordUser+"','"+full_name+"','"+avartar+"','"+self_des+"')"
}

const update = (self_des,useId)=>{
    return "update usernew set self_des = '" + self_des+ "' where userId =" + useId 
}
 const deleteUser = (id) => {return "DELETE FROM usernew WHERE userId = " + id }


module.exports = {
    select,
    insert,
    update,
    deleteUser,
    selectUse
}