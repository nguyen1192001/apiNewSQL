const sql = require('mssql')
const configServer  = { 
    user:"sa",
    password:'123',
    server : "DESKTOP-VSMGIP2",
    port : 1433,
    database:"NEWDB"
}

const config = ()=> {
    return {
        user:configServer.user,
        password:configServer.password,
        server : configServer.server,
        database:configServer.database,
        port: configServer.port,
        options: {
            enableArithAbort: true,
            trustServerCertificate: true,
            encrypt: false
    
        }
}
}

const connectSQL = async (query) => {
    try {
        const connect =  await sql.connect(config())
        let resultSql = (await sql.query(query)).recordset
        await connect.close();
        console.log("connect succesfully")
        return resultSql;
    } catch (error) {
        console.log("error",error)
        throw error
    }
}

const checkConnection = async ( userName , password , check) => {
    try {
        const connect =  await sql.connect(config(userName,password))
        console.log("data connected")
        await connect.close();
        return true

    } catch (error) {
        throw error
    }
}

const configAcess = (req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
}

module.exports = { connectSQL ,checkConnection , configAcess}