import { getAllClientes } from "../Model/ClientesModel.js";

const getAllC = async (req, res) => {

    try {
        const clientes = await getAllClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

export {getAllC}