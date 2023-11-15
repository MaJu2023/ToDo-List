import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import { useEffect, useState } from 'react';
import TaskConent from './components/taskContent';

function App() {
 // pasar tareas a localstorage
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

if(!initialTasks){
   initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {

    if(initialTasks){
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }else{
      localStorage.setItem("tasks", JSON.stringify([]))
    }

  }, [initialTasks, tasks]);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const currentTask = tasks.filter((task) => task.idTask !== id);
    setTasks(currentTask);
  }

  return (
    <Container> 
      <Header /> 
      <InputTask  createTask={createTask} />
      <TaskConent tasks={tasks} deleteTask={deleteTask} /> 
    </Container>
  )
}

export default App;

