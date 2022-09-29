import './Footer.css';

function Footer() {
  return (
    <footer id="Mas-info">
        <div class="lorem-redes">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <br/>
            <hr class="lineasecundaria" noshade=""/>
            <br/>
            <p><i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-twitter"></i></p> 
            <br/>
            <hr class="lineasecundaria" noshade=""/>
        </div>

        <div class="direccion-telefono">
            <p><i class="fa-solid fa-location-dot"></i> Avenidad Carrera 8,#12A-42 Bogotá D.C, Colombia</p>
            <br/><br/>
            <p><i class="fa-solid fa-phone"></i> +57 601 4567899</p>
            <br/>
            <hr class="lineasecundaria" noshade=""/>
        </div>

        <div class="pp">
            <p>Políticas de Privacidad</p>
            <br/><br/>
            <p>Políticas de Privacidad</p>
        </div>
    </footer>
  );
}

export default Footer;