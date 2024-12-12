import NavHome from "../components/componentHome/NavHome.jsx";
import FooterHome from "../components/componentHome/FooterHome.jsx";
import HeaderHome from "../components/componentHome/HeaderHome.jsx";
import "../assets/css/styleLayouts/styleLayoutHome.css"

const LayoutHome = ({ children }) => {
  return (
    <>
      <div className="page">
        <div>
          <NavHome />
        </div>
        <div className="contentPage">
          <HeaderHome />
          <div className="sectionPrincipal">
            {children}
          </div>
          <div className='footerPage'>
            <FooterHome />
          </div>
        </div>
      </div>
    </>
  )
}

export default LayoutHome
