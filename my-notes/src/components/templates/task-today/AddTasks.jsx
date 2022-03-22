import React, {useState, useRef} from 'react'
import {v4 as uuidv4} from 'uuid'
import ItemTask from './ItemTask'

export default function AddTasks(){
    const [tasks, setTasks] = useState([
        {id:1, nameTask: "Tarea 1", completed: false},
        
    ]);
    const inputTaskRef = useRef();

    const addTaskInput= () =>{
        const nameTask = inputTaskRef.current.value;
        if (nameTask === "") return;

        setTasks((prevTasks) =>{
            return [...prevTasks, {id:uuidv4(), nameTask, completed:false}]
        })

        inputTaskRef.current.value= null;
    }

    function onKeyUpValue(event){
        if (event.key == "Enter"){
            addTaskInput()
        }
    }

    return(
        <>
        <div className="container-tasks-added">
            <ul>
                {tasks.map((task) =>(
                    <ItemTask key={task.id} task={task}/>
                ))}
            </ul>
        </div>
        <div className="container-input-add-task">
            <input ref={inputTaskRef} type="text" placeholder="Añadir Tarea"  onKeyUp={onKeyUpValue.bind(this)}  />
            <button className="button" onClick={addTaskInput}>+</button>
        </div>
        </>
    )
}