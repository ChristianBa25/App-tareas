import React from 'react'

export default function AddTasks(){
    return(
        <>
        <div className="container-tasks-added">

        </div>
        <div className="container-input-add-task">
            <input type="text" placeholder="Añadir Tarea" />
            <button className="button">+</button>
        </div>
        </>
    )
}