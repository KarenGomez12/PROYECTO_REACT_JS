import "./Div2prop.css";

function Div2prop({imagen2,texto,correo}){
    return(
        <div className={"AnguieV"} >
            <img className= {imagen2} />
            <h3>{texto}</h3>
            <p>{correo}</p>
        </div> 
    )
}
export default Div2prop;