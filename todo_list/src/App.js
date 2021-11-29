import { useState } from 'react';
import './App.css';

function Task(props) {
  const { tarea, onTarea = () => {} } = props;
  return (
    <div>
      {tarea}<button onClick={() => onTarea(tarea)}>x</button>
    </div>
  );
}

function App() {
  const [tareas, setTareas] = useState([]); //Estado donde se guardan las tareas
  const [inputValue, setInputValue] = useState(''); //Estado donde se guardara los valores

  //Evento para envio de datos atraves del formulario
  function handleSubmit(event) {
    event.preventDefault();

    setTareas((state) => {
      //creando una copia de array y agregando un objeto lista
      console.log('state', state);
      return [
        ...state,
        {
          tarea: inputValue,
        },
      ];
    });
    setInputValue(''); //limpio estado de input
  }

  function deleteTask(tarea, tareas) {
    console.log('tareas', tareas);
    console.log('tarea', tarea);
    setTareas(tareas.filter((itemTarea) => itemTarea.tarea !== tarea));
  }

  return (
    //Formulario para enviar tarea
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          type="text"
          placeholder="ingresar tarea"
          required
          onChange={(e) => {
            console.log('e', e.target.value);
            setInputValue(e.target.value);
          }}
        />
        <button>+ Agregar_tarea</button>
      </form>
      {tareas.lenght > 0
        ? tareas.map((item) => (
            <Task
              tarea={item.tarea}
              onTarea={(tarea) => {
                console.log('tarea', tarea);
                deleteTask(tarea, tareas);
              }}
            />
          ))
        : 'No hay tareas pendientes'}
    </div>
  );
}
//mapeando tareas

export { App };
