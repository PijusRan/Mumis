//REACT
import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";
import {transition_left} from '../../transition.js';
import "./TaskPage.css";

//Components
import Header from "../components/Header.jsx";
import Daily from "./DailyList.jsx";
import Weekly from "./WeeklyList.jsx";
import SettingsModal from "./SettingsModal.jsx";
import Footer from "../components/Footer.jsx";

//Assets
import TaskSettings from "../../img/TaskSettings.svg";

/* -----    APP    ----- */
function TasksPage(){
    checkListValidity();

    //Lists
    const dailyArray = JSON.parse(localStorage.getItem("Daily"));
    const weeklyArray = JSON.parse(localStorage.getItem("Weekly"));

    //ModalActivity
    const [modalActive, setModalActive] = useState(false);
    const toggleModal = () => {setModalActive(!modalActive)};

    return(
        <>
            <Header/>
            <div className='Lists'>
                <Daily array={dailyArray}/>
                <Weekly array={weeklyArray}/>
            </div>
            <Footer/>

            <AnimatePresence>
                {modalActive && <SettingsModal dailyArray={dailyArray} weeklyArray={weeklyArray}/>}
            </AnimatePresence>

            <motion.button whileHover={{scale:1.1}}  className='Settings' whileTap={{scale:0.9}} onClick={toggleModal}>
                    <img src={TaskSettings} alt=""/>
            </motion.button>
        </>
    )
}

export default transition_left(TasksPage);



//Extra Functions
function checkListValidity(){
    if(!localStorage.getItem("Daily")){
        localStorage.setItem("Daily", "[]")
    }
    if(!localStorage.getItem("Weekly")){
        localStorage.setItem("Weekly", "[]")
    }
}