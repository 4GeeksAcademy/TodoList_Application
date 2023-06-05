import React, { useState } from "react";

const InputTask = () => {

    const [input, setInput] = useState("");
    const [task, setTask] = useState([]);
    
    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (input.trim() !== "")
            setTask([input].concat(task));
             setInput('');
        }
    } ;

    const handleClick = (index) => {
		setTask(task.filter((t, currentIndex) => currentIndex !== index));
	};


    return (

            <div className="task-input">
                 <input type="text" id="new-task" name="new-task" placeholder="What needs to be done?"
                 value={input} onChange={handleChange} onKeyDown={handleKeyDown}/>
                 <ul>
                 {task.map((item,index) => ( 
                    <li >{item}<button className="btn btn-secondary btn-sm" type="button" onClick={() => handleClick(index)}><i className="fas fa-trash"></i></button>
                        </li>
                    ))}
                    
				</ul>
				<div className="items">{task.length} items</div>
            </div>
        
    )
}

export default InputTask

    