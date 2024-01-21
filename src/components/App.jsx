import { useState } from 'react';
import TaskInput from './TaskInput/TaskInput';
import TaskItem from './TaskItem/TaskItem';
import Stats from './Stats/Stats';

function App(task, key) {
  const [toDoList, setToDoList] = useState([]);

  const addTask = taskName => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deletTask(deletTaskName) {
    setToDoList(toDoList.filter(task => task.taskName !== deletTaskName));
  }
  function toggleCheck(taskName) {
    setToDoList(prevToDoList =>
      prevToDoList.map(task =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <>
      <div className="container">
        <h1>Task manager</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deletTask={deletTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">Your are done!</p>
          ) : null}
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </>
  );
}

export default App;
