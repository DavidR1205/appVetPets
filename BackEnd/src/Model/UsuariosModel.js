import { getConnection, sql } from "../Config/Connection.js";

const getCredencialesByUsuario = async (usuario, contrasena) => {
    
    const con = await getConnection
    const query = `SELECT * FROM
                Usuario WHERE username = @usuario AND contrasena = @contrasena`;
    
    const request = con.request();
    request.input('usuario', sql.VarChar, usuario);
    request.input('contrasena', sql.VarChar, contrasena);

    const result = await request.query(query);
    return result.recordset;
    
}
export { getCredencialesByUsuario }