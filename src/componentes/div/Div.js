import hnv from './Hotelia negro vertical.svg';
import './Div.css';


function Div(props) {
  return (
    <div id="text1">
        <img src={hnv}/>
        <p>{props.parrafo} 
        </p>
    </div>
  );
}

export default Div;