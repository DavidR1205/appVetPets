import '../../assets/css/StylesHome/styleNav.css';
import { Link } from 'react-router-dom';
import logoEmpresa from '../../assets/image/VetPetLogo.png';

const NavHome = () => {
  return (
    <div class="page">
      <nav class="navBar">
        <div class="home-content">
          <Link to="">
            <div class="title">
              <div class="elements-title">
                <img src={logoEmpresa} alt="" class="logo-sidebar" />
                <p>Inicio</p>
              </div>
            </div>
          </Link>
        </div>
        <div class="profile-content">
          <Link to="#">
            <div class="profile">
              <div class="elements-profile">
                <ion-icon name="person-circle-outline" class="logo-profile"></ion-icon>
                <p>David Ramirez Perdomo</p>
              </div>
            </div>
          </Link>
        </div>
        <div class="mains">
          <Link to="/citas">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="calendar-clear-outline" class="logo-main"></ion-icon>
                <p>Citas</p>
              </div>
            </div>
          </Link>
          <Link to="/clientes">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="person-outline" class="logo-main"></ion-icon>
                <p>Clientes</p>
              </div>
            </div>
          </Link>
          <Link to="/pacientes">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="paw-outline" class="logo-main"></ion-icon>
                <p>Pacientes</p>
              </div>
            </div>
          </Link>
          <Link to="">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="fitness-outline" class="logo-main"></ion-icon>
                <p>Historias</p>
              </div>
            </div>
          </Link>
          <Link to="">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="clipboard-outline" class="logo-main"></ion-icon>
                <p>Inventario</p>
              </div>
            </div>
          </Link>
          <Link to="">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="bag-outline" class="logo-main"></ion-icon>
                <p>Ventas</p>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavHome
