import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../../assets/css/stylesLogin/styleLogin.css";
import logoLogin from "../../assets/image/Vet.png";

const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.get('http://localhost:8085/login', {
                params: { usuario: usuario, contrasena: contrasena },
            });

            if (response.data && response.data.length > 0) {
                localStorage.setItem('user', JSON.stringify(response.data[0]));
                navigate('/')
            }else {
                alert('Credenciales incorrectas. Intente de nuevo.')
            }
        } catch (error) {
            console.error('Error en el Inicio se Sesión: ', error)
            alert('Hubo un error en el Inicio de Sesion. Intenta mas tarde');
        }
    };


    return (
        <div className="baseContainerLogin">
            <div className="imageContainer">
                <img src={logoLogin} alt="logo" className="imageLogo" />
            </div>
            <div className="baseLogin">
                <form onSubmit={handleLogin}>
                    <div className="contLogin">
                        <label htmlFor="usuario">Usuario</label><br />
                        <input type="text" id="usuario" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required/>
                    </div>
                    <div className="contLogin">
                        <label htmlFor="contrasena">Contraseña</label><br />
                        <input type="password" id="contrasena" name="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required/>
                    </div>
                    <div className="containerButton">
                        <button className="buttonLogin" type="submit">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
