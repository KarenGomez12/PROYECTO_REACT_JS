import './NuevoRegistro.css';
import HHB from './Hotelia horizontal blanco.svg';

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
                            <br/><br/>

                            <p>Nombres</p>
                            <input class="Controles2" type="text" name="Nombres" required="obligatorio" placeholder="Anguie Camila"/>
                            <br/><br/>

                            <p>Fecha de Nacimiento</p>
                            <input class="Controles2" type="date" name="Fecha de Nacimiento" required="obligatorio"/>
                            <br/><br/>

                            <p>Gmail</p>
                            <input class="Controles2" id="contraseña" type="text" name="contraseña" required="obligatorio" placeholder="anguievargas2@gmail"/>
                            <br/><br/>

                            <p>País de Origen</p>
                            <input class="Controles2" type="text" name="País de Origen" required="obligatorio" placeholder="Colombia"/>
                            <br/><br/>

                            <p>Contraseña</p>
                            <input class="Controles2" id="contraseña" type="text" name="contraseña" required="obligatorio"/>
                            <br/><br/>
                        </div>

                        <div class="der">
                            <p>Número de Documento</p>
                            <input class="Controles2" type="text" name="Tipo de Documento" required="obligatorio" placeholder="1025417456"/>
                            <br/><br/>

                            <p>Apellidos</p>
                            <input class="Controles2" type="text" name="Apellidos" required="obligatorio" placeholder="Vargas Pinzón"/>
                            <br/><br/>

                            <p>Género</p>
                            <input class="Gen" type="radio" name="Genero" required="obligatorio" value="1"/>Mujer
                            <input class="Gen" type="radio" name="Genero" required="obligatorio" value="2"/>Hombre
                            <input class="Gen" type="radio" name="Genero" required="obligatorio" value="3"/>Otro
                            <br/><br/>

                            <p>Teléfono de Contacto</p>
                            <input class="Controles2" type="text" name="Teléfono de Conacto" required="obligatorio" placeholder="3135207460"/>
                            <br/><br/>

                            <p>Foto</p>
                            <input class="Controles2" type="text" name="Teléfono de Conacto" required="obligatorio" placeholder="Seleccionar Archivo"/>
                            <br/><br/>

                            <p>Confirmación Contraseña</p>
                            <input class="adicional" type="text" name="Confirmación Contraseña" required="obligatorio"/>
                            <br/><br/> 
                        </div>
                    

                        <div id="terminoscondiciones">
                            <input type="checkbox" name="tc"/>Acepto terminos y Condiciones
                            <br/><br/>
                        </div>
                        <button class="ingre" type="submit" name="boton"><a href="#"></a>Ingresar</button>
                    </div>
                </section>
            </div>
        </body>
    );
}
export default NuevoRegistro;