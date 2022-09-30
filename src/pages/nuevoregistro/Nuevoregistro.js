import './Nuevoregistro.css';
import HHB from './Hotelia horizontal blanco.svg';


//Link para la navegabilidad de direccioneamineto 
import { Link } from 'react-router-dom';

function NuevoRegistro() {
    return (
        <body id="body">
            <div id="cuerporegistrate">
                <article id="primeraparte"> 
                        <a href="index.html"><img src={HHB}/></a>
                        <p>Eres más que bienvenido</p>
                </article>

                <section id="segundaparte">
                    <h1>Regístrate</h1> 
                    <div id="segundaparte2">
                        <div class="izq">
                            <p>Tipo de Documento</p>
                            <input class="Controles2" type="text" name="Tipo de Documento" required="obligatorio" placeholder="Cédula de ciudadanía"/>

                            <p>Nombres</p>
                            <input class="Controles2" type="text" name="Nombres" required="obligatorio" placeholder="Anguie Camila"/>

                            <p>Fecha de Nacimiento</p>
                            <input class="Controles2" type="date" name="Fecha de Nacimiento" required="obligatorio"/>

                            <p>Gmail</p>
                            <input class="Controles2" id="contraseña" type="text" name="contraseña" required="obligatorio" placeholder="anguievargas2@gmail"/>

                            <p>País de Origen</p>
                            <input class="Controles2" type="text" name="País de Origen" required="obligatorio" placeholder="Colombia"/>

                            <p>Contraseña</p>
                            <input class="Controles2" id="contraseña" type="text" name="contraseña" required="obligatorio"/>
                        </div>

                        <div class="der">
                            <p>Número de Documento</p>
                            <input class="Controles2" type="text" name="Tipo de Documento" required="obligatorio" placeholder="1025417456"/>

                            <p>Apellidos</p>
                            <input class="Controles2" type="text" name="Apellidos" required="obligatorio" placeholder="Vargas Pinzón"/>

                            <p>Género</p>
                            <input class="Gen" type="radio" name="Genero" required="obligatorio" value="1"/>Mujer
                            <input class="Gen" type="radio" name="Genero" required="obligatorio" value="2"/>Hombre
                            <input class="Gen" type="radio" name="Genero" required="obligatorio" value="3"/>Otro

                            <p>Teléfono de Contacto</p>
                            <input class="Controles2" type="text" name="Teléfono de Conacto" required="obligatorio" placeholder="3135207460"/>

                            <p>Foto</p>
                            <input class="Controles2" type="text" name="Teléfono de Conacto" required="obligatorio" placeholder="Seleccionar Archivo"/>

                            <p>Confirmación Contraseña</p>
                            <input class="adicional" type="text" name="Confirmación Contraseña" required="obligatorio"/> 
                        </div>
                    </div>
                    <div id="terminoscondiciones">
                        <input type="checkbox" name="tc"/>Acepto terminos y Condiciones
                        <br/><br/>
                    </div>
                    <Link to="/Dashboard"><button class="ingre" type="submit" name="boton"><a href="#"></a>Ingresar</button></Link>
                </section>
            </div>
        </body>
    );
}
export default NuevoRegistro;