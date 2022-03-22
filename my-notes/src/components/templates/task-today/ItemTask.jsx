import React, {useState} from 'react';

export default function ItemTask ({task}){
    const {id, nameTask, completed} = task
    
    return(
        <li>
            <p>{nameTask}</p>
            {console.log(task.id)}
        </li>

        
    )
}