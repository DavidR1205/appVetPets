import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();

const stringConnection = {
    user : process.env.USER,
    password : process.env.PASSWORD,
    server : process.env.SERVER,
    database : process.env.DATABASE,
    options : {
        trustServerCertificate : true,
    },   
};

const getConnection = async ()=>{

    try {
        await sql.connect(stringConnection);
        console.log("Conectados a la Base de Datos");
    } catch (error) {
        console.log("Error: ", error);
        process.exit(1);
    }

}

export {sql, getConnection}