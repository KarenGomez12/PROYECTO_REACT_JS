//Para que tome los componenetes
import Nav from'../../componentes/nav/Nav';
import Section from'../../componentes/section/Section';
import Div from'../../componentes/div/Div';
import Section2 from'../../componentes/section2/Section2';
import Articleein from '../../componentes/articleein/Articleein';
import Articlee2 from '../../componentes/acticlee2/Articlee2';
import Div2 from '../../componentes/div2/Div2';
import Footer from '../../componentes/footer/Footer';

function Inicio() {
    return (
        <div>
            <Nav/>
            <Section/>
            <Div
            parrafo='Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en un contexto de
            lujo donde interactúan los negocios, el ocio y el descanso,gracias a su 
            estratégica ubicación rodeada de bancos, restaurantes de alta cocina,centros
            comerciales,almacenes de lujo y emblemáticos parques para aprovechar la
            naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están
            el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño,
            ponemos a tu disposición una oferta gastronómica tan sofisticada como
            saludable a base de productos locales, cargados de lo mejor de la tradición 
            colombiana.' />
            <Section2/>
            <Articleein/>
            <Articlee2/>
            <Div2/>
            <Footer/>
        </div>
    );
}
export default Inicio;
