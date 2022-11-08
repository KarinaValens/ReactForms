import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Learn React", id: "1" },
    { task: "Learn SASS", id: "2" },
  ]);

  function deleteTask(id) {
    //todo: delete stuff
    //passes this function to the list component and then to the lisItem component as a prop
    //console.log(`I will delete task ${id}`);
    //filter the task and we are going to return all the tasks that have a different id from the one we are passin in this function
    setTasks((oldTask) => oldTask.filter((task) => task.id !== id));
  }

  function addTask(task) {
    //console.log(`I will add the task: ${task}`);
    //TODO: get the new task
    const newTask = {
      id: Date.now(), //to get an unique id each time
      task: task,
    };
    //TODO: change the state
    //returns the old array of objects with the new object at the end of the arrays
    setTasks((oldTask) => oldTask.concat(newTask));
  }
  return (
    <main>
      <section className="form">
        <Form addTask={addTask} />
      </section>
      <section className="list">
        <List deleteTask={deleteTask} tasks={tasks} />
      </section>
    </main>
  );
}

export default App;
