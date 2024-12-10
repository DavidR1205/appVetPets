import { getAllClientes } from "../../services/ClienteServices.js";
import React, { useEffect, useState } from "react";
import "../../assets/css/stylesPages/styleClientes.css"

const ListarCliente = () => {

    const [clientes, setClientes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCliente();
    }, [])

    const fetchCliente = async () => {
        try {
            const data = await getAllClientes();
            setClientes(data);
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div>
            <section className="sectionPrincipal">
                <table>
                    <thead>
                        <tr>
                            <th>Primer Nombre</th>
                            <th>Segundo Nombre</th>
                            <th>Primer Apellido</th>
                            <th>Segundo Apellido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr>
                                <td>{cliente.primer_nombre}</td>
                                <td>{cliente.segundo_nombre}</td>
                                <td>{cliente.primer_apellido}</td>
                                <td>{cliente.segundo_apellido}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default ListarCliente
