import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { todoType } from './apptypes';
// function component oldugunu belirmek icin 
const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  console.log(todoList);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }

  }
  const addNewTask = () => {
    const newTask = { taskName: task, workDay: workDay }
    setTodoList([...todoList, newTask]); //todolist tekileri don newtas ki ekle demek
    setTask('');
    setWorkDay(0);
  }
  return (
    <div className="App">
      <input type='text' name='task' value={task} placeholder='taskınızı giriniz…' onChange={handleChange} />
      <input type='number' name='workDay' value={workDay} placeholder='Kaç günde tamamlamalısınız' onChange={handleChange} />
      <button onClick={addNewTask} >Yeni task ekle</button>
    </div>
  );
}

export default App;
