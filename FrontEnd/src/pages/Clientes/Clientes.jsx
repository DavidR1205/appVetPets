import { getAllClientes } from "../../services/ClienteServices.js";
import React, { useEffect, useState } from "react";
import "../../assets/css/stylesPages/styleClientes.css"
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/UseAuth.js'

const ListarCliente = () => {
    useAuth();

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
                <div>
                    <div className="">
                        <Link to="">
                            <button type="submit" className="boton">Agregar</button>
                        </Link>
                    </div>

                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>Segundo Nombre</th>
                                <th>Primer Apellido</th>
                                <th>Segundo Apellido</th>
                                <th>Primer Nombre</th>
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
                </div>
            </section>
        </div>
    )
}

export default ListarCliente
