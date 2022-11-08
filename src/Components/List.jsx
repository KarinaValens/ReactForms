import ListItem from "./ListItem";

function List(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <ListItem deleteTask={props.deleteTask} task={task.task} id={task.id} key={task.id} />
      ))}
    </ul>
  );
}

export default List;
