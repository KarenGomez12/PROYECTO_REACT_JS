import './Iniciarsesion.css';
import HHN from './Hotelia horizontal negro.svg';

//Para que me tome el linqueado que hago
import { Link } from 'react-router-dom';

function Iniciarsesion() {
    return (
        <body id="Habitacion">
            <nav class="home">
            <a href="index.html" class="home"><i class="fa-solid fa-house-chimney"></i></a>   
            </nav>
            
            <section id="Login">
            <img src={HHN}/>
                <form id="Hotelia3">
                    <div class="user">
                        <i class="fa-solid fa-user"></i>
                    </div>

                    <p>Usuario</p>
                    <input class="Controles" id="usuario" type="text" name="usuario" required="obligatorio"/>
                    <br/><br/>

                    <p>Contraseña</p>
                    <input class="Controles" id="contraseñaa" type="text" name="contraseña" required="obligatorio"/>
                    <br/><br/><br/>

                    <Link to="Dashboard"><button class="BotonLogin" id="Ingresar" type="submit" name="boton"><a href="Dashboard.html">Ingresar</a></button></Link>
                    <Link to="Nuevoregistro"><p class="cuenta">¿No tienes cuenta?<a href="NuevoRegistro.html">Registrate aquí</a></p></Link>
                </form>
            </section>
        </body>
    );
}
export default Iniciarsesion;
