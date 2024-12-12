import '../../assets/css/StylesHome/styleHeader.css'

const HeaderHome = () => {
    return (
        <div>
            <header class="headerPage">
                <div class="sidebar-button">
                    <ion-icon name="menu-outline" class="menu-logo"></ion-icon>
                </div>
                <div class="content-logout">
                    <div class="logout-button">
                        <ion-icon name="exit-outline" class="logo-logout"></ion-icon>
                        <p>Cerrar Sesion</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeaderHome
