import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
// function component oldugunu belirmek icin 
const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
    console.log(task, workDay);
  }
  return (
    <div className="App">
      <input type='text' name='task' value={task} placeholder='taskınızı giriniz…' onChange={handleChange} />
      <input type='number' name='workDay' value={workDay} placeholder='Kaç günde tamamlamalısınız' onChange={handleChange} />
      <button >Yeni task ekle</button>
    </div>
  );
}

export default App;
