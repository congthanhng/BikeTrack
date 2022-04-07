import { View } from "react-native";
import React from "react";
import styles from "../../ToDoApp/style";
import { useSelector } from "react-redux";
import TaskListItem from "./TaskListItem";
import { selectTaskList } from "../redux/features/tasks/tasksHooks";

export default function TaskList() {
  const tasks = useSelector(selectTaskList);
  console.log("TaskList rebuild", tasks);

  const renderedListItems = tasks.map((task) => {
    return <TaskListItem key={task.id} id={task.id} task={task} />;
  });

  return <View style={styles.items}>{renderedListItems}</View>;
}
