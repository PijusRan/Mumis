//REACT
import { useState } from 'react';
import {transition_left} from '../transition.js';
import {motion, AnimatePresence} from "framer-motion";
import "../css/DailyTasks.css"

//Modules
import getDayOfWeek from '../modules/getDayOfWeek.js';
import getFormatDate from '../modules/getFormatDate.js'

//Assets
import WavesTop from "../img/WavesTop.svg";
import WavesBottom from "../img/WavesBottom.svg";
import TaskSettings from "../img/TaskSettings.svg";
import DashWithStar from "../img/DashWithStar.svg";


if(!localStorage.getItem("Daily")){
    localStorage.setItem("Daily", "[]")
}
let dailyArray = JSON.parse(localStorage.getItem("Daily"));

/* -----    APP    ----- */
function TasksPage(){
    const [modalActive, setModalActive] = useState(false);
    const toggleModal = () => {setModalActive(!modalActive)};

    return(
        <>
            <Header/>
            <Daily/>
            <Weekly/>
            <Footer toggleModal={toggleModal}/>      

            <AnimatePresence>
                {modalActive && <SettingsModal toggleModal={toggleModal}/>}
            </AnimatePresence>
            
        </>
    )
}

export default transition_left(TasksPage);

/* ----- COMPONENTS ----- */
//HEADER
function Header(){
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

//FOOTER
function Footer({toggleModal}){
    return(
        <div className='Footer'>
            <img src={WavesBottom} className='WavesBottom' alt=""/>

            <motion.button whileHover={{scale:1.1}}  className='Settings' whileTap={{scale:0.9}} onClick={toggleModal}>
                    <img src={TaskSettings} alt=""/>
            </motion.button>
        </div>
    )
}

//Daily Tasks
function Daily(){
    return(
        <div className='Daily'>
                <h1>DAILY</h1>

                <div className='DailyList'>
                    {dailyArray.map((item, index) => 
                        <DailyTaskItem isDone={item.isDone} taskString={item.taskString} taskTime={item.taskTime} key={index} index={index}/>    
                    )}

                    <img src={DashWithStar} className='DashWithStar' alt=""/>
                </div>
        </div>
    )
}

//Weekly Tasks
function Weekly(){
    return(
        <div className='Weekly'>
            <h2>Weekly Tasks</h2>
            <div className='WeeklyList'>
                <label>
                    Lorem Ipsum Lorem Ipsum
                    <input type='checkbox'/>
                </label>
            </div>
        </div>
    )
}


function SettingsModal({toggleModal}){
    return(
        <motion.div className='Backdrop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='SettingsModal'>
                <h2>Your task list</h2>
                <div className='modalTypes'>
                    <button>Daily</button>
                    <button>Weekly</button>
                </div>
                
                <div className='modalTaskList'>
                    {dailyArray.map((item) =>
                        <div>
                            <button className='x'>✖</button>
                            <p>{item.taskString}</p>
                        </div>
                    )}
                </div>
                <div>
                    <input/>
                    <button>✦</button>
                </div>
            </div>
            <button onClick={toggleModal}> Close </button>
        </motion.div>
    )
}

//Other
function DailyTaskItem(props){
    function markCheck(){
        if(dailyArray[props.index].isDone === true) dailyArray[props.index].isDone = false;
        else dailyArray[props.index].isDone = true;
    }

    return(
        <label>
            <input type="checkbox" className='Checkbox' defaultChecked={props.isDone} onChange={markCheck}/>
            {props.taskString} {props.taskTime}
        </label>
    )
}