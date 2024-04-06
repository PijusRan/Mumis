//Assets
import WavesBottom from "../../img/WavesBottom.svg";

//CSS
import './HeaderFooter.css';

//FOOTER
export default function Footer(){
    return(
        <footer className='Footer'>
            <img src={WavesBottom} className='WavesBottom' alt=""/>
        </footer>
    )
}