import "../../assets/css/stylesLogin/styleLogin.css";
import logoLogin from "../../assets/image/Vet.png";

const Login = () => {
    return (
        <div>
            <div className="baseLogin">
                <div className="containerImageLogin">
                    <img src={logoLogin} alt="" className="imgLogo"/>
                </div>
                <div className="formLogin">
                    <form action="" className="contentFormLogin">
                        <div className="containerLogin">
                            <label htmlFor="" className="labelLogin">Usuario</label><br />
                            <input type="text" className="inputLogin"/>
                        </div>
                        <div className="containerLogin">
                            <label htmlFor="" className="labelLogin">Contraseña</label><br />
                            <input type="password" className="inputLogin"/>
                        </div>
                        <div className="containerButton">
                            <button type="submit" className="buttonLogin">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
