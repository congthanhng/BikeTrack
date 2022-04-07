import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../../ToDoApp/style";
import { useSelector } from "react-redux";
import {  selectTaskList, taskRemoved, taskToggled } from "../slices/tasksSlice";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
  const tasks = useSelector(selectTaskList);
  console.log("TaskList rebuild",tasks);

  const renderedListItems = tasks.map(task => {
    return <TaskListItem key={task.id} id={task.id} task ={task} />
  })

  return (
    <View style={styles.items}>
      {renderedListItems}
    </View>
  )
}
