import NavHome from "../components/componentHome/NavHome.jsx";
import FooterHome from "../components/componentHome/FooterHome.jsx";
import Router from "../router/Router.jsx";
import HeaderHome from "../components/componentHome/HeaderHome.jsx";
import "../assets/css/styleLayouts/styleLayoutHome.css"

const LayoutHome = () => {
  return (
    <>
      <div className="page">
        <div>
          <NavHome />
        </div>
        <div className="contentPage">
            <HeaderHome />
            <div className="sectionPrincipal">
            <Router />
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
