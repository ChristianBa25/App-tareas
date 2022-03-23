import React, {useState} from 'react';

export default function ItemTask ({task}){
    const {id, nameTask, completed} = task
    return(
        
        <li className="li-task">
            <input type="checkbox" />
            <p>{nameTask}</p>    
        </li>

        
    )
    
}