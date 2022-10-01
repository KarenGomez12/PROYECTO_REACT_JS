import "./Articleprop.css";

function Articleprop({imagen,bienvenidos}){
    return(
        <article idName={"primeraparte"}> 
        <img />{imagen}
        <p>{bienvenidos} </p>
        </article>
    )
}
export default Articleprop;