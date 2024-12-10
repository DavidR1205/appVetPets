import React from 'react'
import '../../assets/css/StylesHome/styleNav.css'

const NavHome = () => {
  return (
    <div class="page">
      <nav class="navBar">
        <div class="home-content">
          <a href="">
            <div class="title">
              <div class="elements-title">
                <ion-icon name="checkmark-circle" class="logo-sidebar"></ion-icon>
                <p>Inicio</p>
              </div>
            </div>
          </a>
        </div>
        <div class="profile-content">
          <a href="">
            <div class="profile">
              <div class="elements-profile">
                <ion-icon name="person-circle-outline" class="logo-profile"></ion-icon>
                <p>Usuario X</p>
              </div>
            </div>
          </a>
        </div>
        <div class="mains">
          <a href="/citas">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="pricetag-outline" class="logo-main"></ion-icon>
                <p>Citas</p>
              </div>
            </div>
          </a>
          <a href="/clientes">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="cash-outline" class="logo-main"></ion-icon>
                <p>Clientes</p>
              </div>
            </div>
          </a>
          <a href="">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="person-outline" class="logo-main"></ion-icon>
                <p>Ventas</p>
              </div>
            </div>
          </a>
          <a href="">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="bus-outline" class="logo-main"></ion-icon>
                <p>Ventas</p>
              </div>
            </div>
          </a>
          <a href="/pacientes">
            <div class="listNav">
              <div class="elements-sidebar">
                <ion-icon name="stats-chart-outline" class="logo-main"></ion-icon>
                <p>Pacientes</p>
              </div>
            </div>
          </a>
        </div>
        <div class="settings-content">
          <a href="">
            <div class="settings">
              <div class="elements-settings">
                <ion-icon name="settings-outline" class="logo-main"></ion-icon>
                <p>Ajustes</p>
              </div>
            </div>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default NavHome
