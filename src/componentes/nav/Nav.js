import logo from './Hotelia horizontal blanco.svg';
import './Nav.css';

function Nav() {
  return (
    <nav id="index">
        <div class="logo">
            <img src={logo}/>
            <i class="fa-solid fa-bars"></i>
        </div>      
        <div class="menu">
            <a href="index.html" class="item">Inicio</a>
            <a href="ubicanos.html" class="item">Ubícanos</a>
            <a href="opiniones.html" class="item">Opiniones</a>
            <hr class="menu-hr" noshade=""/>
            <a href="iniciarsesion.html" class="item"><button class="navbar-button"></button><i class="fa-solid fa-user"></i> Iniciar Sesión</a>
        </div>
    </nav> 
  );
}

export default Nav;
