import React from "react";

function ListItem(props) {
  //props.deleteTask()
  return (
    <>
      <li>
        <p>{props.task}</p>
        <button onClick={() => props.deleteTask(props.id) /* this is a callback function */}>COMPLEATE</button>
      </li>
    </>
  );
}

export default ListItem;
