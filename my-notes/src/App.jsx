import React from 'react'
import './App.css';

function App() {
  return (
    <div className="container-App">
      <div className="title-app">
        <h1>Organizador personal MyNotes</h1>
      </div>
      <div className="container-options-templates">
        <section className="container-options-app">
          <button className="button button-tasks-today">Tareas de Hoy</button>
          <button className="button button-all-tasks">Todas las tareas</button>
          <button className="button button-calendar">Calendario</button>
          <button className="button button-money">Administrar dinero</button>
          <button className="button button-settings">Ajustes</button>
        </section>
        <section className='container-templates-app'>
          <div>Hola</div>
        </section>
        </div>
    </div>
  );
}

export default App;
