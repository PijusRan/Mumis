//Modules
import { useState } from 'react';
import {motion} from "framer-motion";

export default function SettingsModal(props){

    //Array Toggling
    const [weeklyStyle, setWeeklyStyle] = useState("modalButtonInactive")
    const [dailyStyle, setDailyStyle] = useState("modalButtonActive")

    const [usingArray, setArray] = useState(props.dailyArray);
    function setDaily(){
        setWeeklyStyle("modalButtonInactive");
        setDailyStyle("modalButtonActive");
        setArray(props.dailyArray);
    }
    function setWeekly(){
        setWeeklyStyle("modalButtonActive");
        setDailyStyle("modalButtonInactive");
        setArray(props.weeklyArray);
    }

    //Input
    const [input, updateInput] = useState('');

    function addToArray(E){
        E.preventDefault()

        if(dailyStyle === "modalButtonActive"){
            props.dailyArray.push({"taskString":input, "isDone":false});
            localStorage.setItem("Daily", JSON.stringify(props.dailyArray));
            setArray([...props.dailyArray]); //trigger rerender
        }
        else{
            props.weeklyArray.push({"taskString":input, "isDone":false});
            localStorage.setItem("Weekly", JSON.stringify(props.weeklyArray));
            setArray([...props.weeklyArray]); //trigger rerender
        }
    }

    function removeFromArray(index){
        if(dailyStyle === "modalButtonActive"){
            props.dailyArray.splice(index, 1);
            localStorage.setItem("Daily", JSON.stringify(props.dailyArray));
            setArray([...props.dailyArray]); //trigger rerender
        }
        else{
            props.weeklyArray.splice(index, 1);
            localStorage.setItem("Weekly", JSON.stringify(props.weeklyArray));
            setArray([...props.weeklyArray]); //trigger rerender
        }
    }



    return(
        <motion.div className='Backdrop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='SettingsModal'>
                <h2>Your task list</h2>
                <div className='modalTypes'>
                    <motion.button whileTap={{scale:0.9}} className={dailyStyle} onClick={setDaily}>Daily</motion.button>
                    <motion.button whileTap={{scale:0.9}} className={weeklyStyle} onClick={setWeekly}>Weekly</motion.button>
                </div>
                
                <section className='modalTaskList'>
                    {usingArray.map((item, index) =>
                        <div key={index}>
                            <motion.button whileHover={{scale:1.5}} whileTap={{scale:0}} className='x' onClick={() => removeFromArray(index)}>✖</motion.button>
                            <p>{item.taskString}</p>
                        </div>
                    )}
                </section>

                <form className='modalInputTask'>
                    <input placeholder='ADD NEW TASK' onChange={I => updateInput(I.target.value)}/>
                    <motion.button onClick={addToArray}>✦</motion.button>
                </form>
            </div>
        </motion.div>
    )
}