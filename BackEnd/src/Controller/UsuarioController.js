import { getCredencialesByUsuario } from "../Model/UsuariosModel.js";

const getCredenciales = async (req, res) => {
    const { usuario, contrasena } = req.query;

    try {
        const credenciales = await getCredencialesByUsuario(usuario, contrasena);
        res.json(credenciales);
    } catch (error) {
        res.status(500).json({message: "Error en el Servidor"});
    }

}

export { getCredenciales }