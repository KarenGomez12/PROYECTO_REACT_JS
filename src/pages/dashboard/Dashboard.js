import './Dashboard.css';
import HHB2 from './Hotelia horizontal blanco.svg';
import hc from './hotelia campana.svg';
import mA from './muñecaAnguie.png';
import anguie from './anguie.png';

//Para que me tome el divprop de los props 
import Div2prop from "./Div2prop";

//Link para la navegabilidad de direccioneamineto 
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <body id="dash1">
            <nav id="dash">
                <div id="dash2">
                    <Div2prop
                    imagen2="img2" src={HHB2}
                    texto='Anguie Vargas'
                    correo='anguievargas2@gmail.com'
                    />
                      
                </div>
                <div class="menu2">
                    <Link to="/Listadohabitacion"><a href="#" class="items"><i class="fa-solid fa-bed"></i>Habitaciones</a></Link>
                    <a href="#" class="itemss"><i class="fa-solid fa-bell-concierge"></i>Reservas</a>
                    <a href="#" class="items"><i class="fa-solid fa-bed"></i>Habitaciones</a>
                    <a href="#" class="itemss"><i class="fa-solid fa-bell-concierge"></i>Habitaciones</a>
                </div>

                <div class="cerrar">
                    <Link to="/"><a href="index.html"><i class="fa-solid fa-arrow-right-from-bracket"></i>  Cerrar Sesión</a></Link>
                </div>
            </nav>
            <aside id="dash01">
                <div class="menulateral1">
                    <div class="menuencabezado1">
                        <img src={hc}/>
                        <img src={mA}/>
                    </div>
                    <div class="iconosmenu1">
                        <a href="#" class="items"><i class="fa-solid fa-bed"></i></a>
                        <a href="#" class="items"><i class="fa-solid fa-bed"></i></a>
                        <a href="#" class="items"><i class="fa-solid fa-pen"></i></a>
                    </div>
                    <div class="salida1">
                        <a href="#" class="items"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    </div>
                </div>
            </aside>

            <section id="cuerporegistro" >
                <div id="An">
                    <h2>Bienvenido, Anguie Vargas</h2>
                    <div id="Ann">
                        <div class="an2">
                            <img src={anguie}/>
                            <div class="ann2">
                                <p><i class="fa-solid fa-file-arrow-up"></i>  <i class="fa-solid fa-download"></i></p>    
                            </div>
                            <div class="ifasolid">
                                <p><i class="fa-solid fa-download"></i></p>
                            </div>
                            <button class="cambiocontraseña" type="submit" name="boton"><a href="#"></a><h1>Cambiar Contraseña</h1></button>
                        </div>

                        <div class="an3">
                            <p>Tipo de Documento</p>
                            <input class="Controles2" type="text" name="Tipo de Documento" required="obligatorio" placeholder="Cédula de ciudadanía"/>
                            
                            <p>Nombres</p>
                            <input class="Controles2" type="text" name="Nombres" required="obligatorio" placeholder="Anguie Camila"/>
                            
                            <p>Fecha de Nacimiento</p>
                            <input class="Controles2" type="date" name="Fecha de Nacimiento" required="obligatorio"/>

                            <p>Género</p>
                            <input class="Gen" type="radio" name="Genero" required="obligatorio" value="1" checked/>Mujer
                            <input class="Gen" type="radio" name="Genero" required="obligatorio" value="2"/>Hombre
                            <input class="Gen" type="radio" name="Genero" required="obligatorio" value="3"/>Otro
                            
                            <p>Email</p>
                            <input class="Controles2" id="ccorreo" type="text" name="correo" required="obligatorio" placeholder="anguievargas2@gmail"/>
                            <br/>
                            <button class="actualizar" type="submit" name="boton"><a href="#"></a>Actualizar</button>

                            <p>Contraseña</p>
                            <input class="Controles2" id="contraseña" type="text" name="contraseña" required="obligatorio"/>
                            <br/>
                            <button class="Cambiar" type="submit" name="boton"><a href="#"></a>Cambiar</button>
                            
                        </div>

                        <div class="an4">
                            <p>Número de Documento</p>
                            <input class="Controles2" type="text" name="Tipo de Documento" required="obligatorio" placeholder="1025417456"/>

                            <p>Apellidos</p>
                            <input class="Controles2" type="text" name="Apellidos" required="obligatorio" placeholder="Vargas Pinzón"/>

                            <p>País de Origen</p>
                            <input class="Controles2" type="text" name="País de Origen" required="obligatorio" placeholder="Colombia"/>

                            <p>Teléfono de Conacto</p>
                            <input class="Controles2" type="text" name="Teléfono de Conacto" required="obligatorio" placeholder="3135207460"/>

                            <div class="confirmicontra">
                                <p >Confirmación Contraseña</p>
                                <input class="adicional" type="text" name="Confirmación Contraseña" required="obligatorio"/>   
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
        </body>
    );
}
export default Dashboard;