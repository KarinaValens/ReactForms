import React from "react";

function Form(props) {
  function submit(e) {
    //to avoid the page refreshes
    e.preventDefault();
    //Read the input field from the form to make it a new task
    props.addTask(e.target.elements.task.value);
  }
  return (
    <form onSubmit={submit}>
      <label htmlFor="task">New Task</label>
      <input type="text" name="task" />
      <button>ADD TASK</button>
    </form>
  );
}

export default Form;
