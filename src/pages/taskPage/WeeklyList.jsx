//Weekly Tasks
export default function Weekly(props){
    function markCheck(index){
        if(props.array[index].isDone === true) props.array[index].isDone = false;
        else props.array[index].isDone = true;
        localStorage.setItem("Weekly", JSON.stringify(props.array));
    }

    return(
        <div className='Weekly'>
            <h2>Weekly Tasks</h2>
            <div className='WeeklyList'>
                {props.array.map((item, index) =>
                        <label key={index}>
                            {item.taskString}
                            <input type="checkbox" className='Checkbox' defaultChecked={item.isDone} onChange={() => markCheck(index)}/>
                        </label>
                )}
            </div>
        </div>
    )
}

