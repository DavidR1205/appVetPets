import { sql } from "../Config/Connection.js";

const getAllClientes = async()=> {
    
    try {
        const resultado = await sql.query("SELECT * FROM Cliente");
        return resultado.recordset;   
    } catch (error) {
        throw error;
    }

}

export {getAllClientes}