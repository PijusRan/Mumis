//Assets
import WavesTop from "../../img/WavesTop.svg";
//Modules
import getDayOfWeek from '../../modules/getDayOfWeek.js';
import getFormatDate from '../../modules/getFormatDate.js'

//HEADER
export default function Header(){
    return(
        <div className='Head'>
            <div className='DateContainer'>
                <h1 className='DayOfWeek'>{getDayOfWeek()}</h1>
                <h2 className='Date'>{getFormatDate()}</h2>
            </div>
            <img src={WavesTop} className='WavesTop' alt=""/>
        </div>
    )
}