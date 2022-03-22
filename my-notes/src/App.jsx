import React, {useState} from 'react'
import SelectOption from './components/SelectOptions'
import './App.css';


function App() {
  const [options, setOption] = useState(1)


  return (
    
    <div className="container-App">
      
      <div className="title-app">
        <h1>Organizador personal MyNotes</h1>
      </div>
      <div className="container-options-templates">
        <section className="container-options-app">
          <button className="button button-tasks-today" onClick={()=>setOption(1)}>Tareas de Hoy</button>
          <button className="button button-all-tasks" onClick={()=>setOption(2)}>Todas las tareas</button>
          <button className="button button-calendar" onClick={()=>setOption(3)}>Calendario</button>
          <button className="button button-money" onClick={()=>setOption(4)}>Administrar dinero</button>
          <button className="button button-settings" onClick={()=>setOption(5)}>Ajustes</button>
        </section>
        <section className='container-templates-app'>
          <SelectOption option={options}/>
        </section>
        </div>
    </div>
  );
}

export default App;
