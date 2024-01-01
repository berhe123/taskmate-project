
import './App.css';
import { useEffect, useState } from 'react';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';

function App() {
  const [tasklist, settTasklist] = useState([]);
  const[task, setTask] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);

  useEffect(() =>{
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);

  return (
    <div className="App">
      < Header />
      < AddTask tasklist={tasklist} settTasklist= {settTasklist}
          task={task} setTask={setTask} />
      < ShowTask tasklist={tasklist} settTasklist= {settTasklist}
      task={task} setTask={setTask} />
    </div>
  );
}

export default App;
