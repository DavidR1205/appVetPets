import FooterLogin from "../components/componentLogin/FooterLogin.jsx";
import "../assets/css/styleLayouts/styleLayoutLogin.css";

const LayoutLogin = ({ children }) => {
    return (
        <>
            <div className="pageLogin">
                <div>
                </div>
                <div className="contentLogin">
                    {children}
                </div>
                <div>
                    <FooterLogin />
                </div>
            </div>
        </>
    )
}

export default LayoutLogin
