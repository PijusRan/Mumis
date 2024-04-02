//Assets
import DashWithStar from "../../img/DashWithStar.svg";
import {motion, useAnimationControls} from "framer-motion";
import {useState} from 'react';

//Daily Tasks
export default function Daily(props){
    return(
        <div className='Daily'>
                <h1>DAILY</h1>

                <div className='DailyList'>
                    {(props.array).map((item, index) => 
                        <TaskItem isDone={item.isDone} taskString={item.taskString} taskTime={item.taskTime} key={index} index={index} array={props.array}/>    
                    )}

                    <img src={DashWithStar} className='DashWithStar' alt=""/>
                </div>
        </div>
    )
}

function TaskItem(props){
    const textControls = useAnimationControls();

    const [checkSymbol, updateSymbol] = useState(props.array[props.index].isDone ? 'V' : '-');

    function markCheck(){
        if(props.array[props.index].isDone === true){
            props.array[props.index].isDone = false;
            updateSymbol("—");
            textControls.start({filter: "blur(0px)"})
        }
        else{
            props.array[props.index].isDone = true;
            updateSymbol("V");
            textControls.start({filter: "blur(3px)"})
        }
        localStorage.setItem("Daily", JSON.stringify(props.array));
    }

    return(
        <div className="DailyItem" onClick={markCheck}>
            <motion.button className="Checkmark" whileHover={{scale:1.1}} whileTap={{scale:0}}>{checkSymbol}</motion.button>
            <motion.p animate={textControls} initial={props.array[props.index].isDone ? {filter: "blur(3px)"} : {filter: "blur(0px)"}}>{props.taskString}</motion.p>
        </div>
            
    )
}