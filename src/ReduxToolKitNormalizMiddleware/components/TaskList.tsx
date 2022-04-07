import { View } from "react-native";
import React from "react";
import styles from "../../ToDoApp/style";
import { useSelector } from "react-redux";
import TaskListItem from "./TaskListItem";
import { selectTaskIds } from "../redux/features/tasks/tasksHooks";
// import { selectTaskIds } from "../redux/features/tasks/tasksSlice";


export default function TaskList() {
  const taskIds = useSelector(selectTaskIds);
  // const tasks = useSelector(selectTasks)
  // console.log("TaskList ", tasks);
  console.log("TaskList rebuild", taskIds);

  const renderedListItems = taskIds.map((id) => {
    return <TaskListItem key={id} id={id} />;
  });

  return <View style={styles.items}>{renderedListItems}</View>;
}
