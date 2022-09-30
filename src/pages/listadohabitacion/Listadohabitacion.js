import './Listadohabitacion.css';
import IMAGEN1 from './Hotelia horizontal blanco.svg';
import IMA from './muñecaAnguie.png';
import CAMA1 from './cama1.jpg';
import CAMA2 from './cama2.jpg';
import CAMA3 from './cama3.jpg';

//Link para la navegabilidad de direccioneamineto 
import { Link } from 'react-router-dom';

function Listadohabitacion() {
    return (
        <body>
            <div id="contenedor">  
                <aside class="listadohabitacion">

                    <div class="menulateral1">
                        <img class="imagen1" src={IMAGEN1}/>
                        <div class="AnguieeV">
                            <img class="muñecaAnguie"src={IMA}/>
                            <div class="nombre">
                                <h3>Anguie Vargas</h3>
                                <p>anguievargas2@gmail.com</p>
                            </div>
                        </div>    
                    </div>

                    <div class="menulateral2">
                        <a href="" class="items"><i class="fa-solid fa-bed"></i> Habitaciones</a>
                        <a href="" class="items"><i class="fa-solid fa-bed"></i> Registrar habitaciones</a>
                        <a href="" class="iitems"><i class="fa-solid fa-pen"></i> Editar Perfil</a>
                    </div>
                    <div class="salida">
                            <Link to="/"><a href="index.html" ><i class="fa-solid fa-arrow-right-from-bracket"></i>Cerrar Sesión</a></Link>
                    </div>
                </aside>
                
                <section class="habitaciones">
                    <div id="reservas">
                        <div class="titulohabi">
                        <p>Habitaciones</p>  
                        </div>
                        <div class="categoriaestado">
                            <p class="cate">Categoría </p> 
                            <select name="categoria" id="categoria">
                                <option value="value1">Todas</option>
                                <option value="value2">Sencilla</option>
                                <option value="value3">Doble</option>
                            </select>
                            <p>Estado </p> 
                            <select name="estado" id="estado">
                                <option value="value3">Todas</option>
                                <option value="value4">Reservada</option>
                                <option value="value5">Disponible</option>
                            </select>
                        </div>
                        <div class="camas">
                            <div class="fila1">
                            <div class="cama1">
                                    <img class="imagen2"src={CAMA1}/>
                                    <p class="decripcion">Habitación doble</p>
                                    <p class="precio">$128.000</p>
                                    <p class="frase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button class="modificar">Modificar</button><button class="estado">Inactivar</button>
                                </div>
                                <div class="cama2">
                                    <img class="imagen2" src={CAMA2}/>
                                    <p class="decripcion">Habitación doble</p>
                                    <p class="precio">$250.000</p>
                                    <p class="frase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button class="modificar">Modificar</button><button class="estado">Inactivar</button>
                                </div>
                                <div class="cama3">
                                    <img class="imagen2"src={CAMA3}/>
                                    <p class="decripcion">Habitación doble</p>
                                    <p class="precio">$166.000</p>
                                    <p class="frase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button class="modificar">Modificar</button><button class="estado">Inactivar</button>
                                </div> 
                            </div>
                            <div class="fila2">
                                <div class="cama1">
                                    <img class="imagen2"src={CAMA3}/>
                                    <p class="decripcion">Habitación doble</p>
                                    <p class="precio">$220.000</p>
                                    <p class="frase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button class="modificar">Modificar</button><button class="estado">Inactivar</button>
                                </div>
                                <div class="cama2">
                                    <img class="imagen2"src={CAMA1}/>
                                    <p class="decripcion">Habitación doble</p>
                                    <p class="precio">$180.000</p>
                                    <p class="frase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button class="modificar">Modificar</button><button class="estado">Inactivar</button>
                                </div>
                                <div class="cama3">
                                    <img class="imagen2" src={CAMA2}/>
                                    <p class="decripcion">Habitación doble</p>
                                    <p class="precio">$195.000</p>
                                    <p class="frase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button class="modificar">Modificar</button><button class="estado">Inactivar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>  
        </body>
    );
}
export default Listadohabitacion;