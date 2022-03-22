import React from 'react'
import AddTasks from './templates/task-today/AddTasks'


export default function SelectOption({option}){
    if (option===1){
        return(
            <AddTasks/>
        )
    }
    else if (option===2){
        return(
            <div>
                Pantalla 2
            </div>
        )
    }
    
    else if (option===3){
        return(
            <div>
                Pantalla 3
            </div>
        )
    }
    else if (option===4){
        return(
            <div>
                Pantalla 4
            </div>
        )
    }
    else if (option===5){
        return(
            <div>
                Pantalla 5
            </div>
        )
    }

}