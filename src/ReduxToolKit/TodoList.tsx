import React from "react";
import { useSelector } from "react-redux";
import styles from "../ToDoApp/style";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Task from "../Components/Task";
import {
  selectTasks,
  taskAdded,
  taskCompleted,
  taskRemoved,
  taskToggled,
} from "./tasksSlice";
import { useAppDispatch } from "./hooks";
import { selectInput, textChanged } from "./inputSlice";
import TaskList from "./Components/TaskList";
// import { taskToggled } from "./taskSlice";

export const TodoList = () => {
  console.log("rebuild");
  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <TaskList />
        </View>
      </ScrollView>
      <InputTask/>
    </View>
  );
};

const InputTask = () => {
  const input = useSelector(selectInput);
  const dispatch = useAppDispatch();
  console.log("InputTask rebuild ");
  return (
    <View style={styles.writeTaskWrapper}>
      <TextInput
        style={styles.input}
        placeholder={"Write a task"}
        onChangeText={(text) => dispatch(textChanged(text))}
        defaultValue={input}
      />
      <TouchableOpacity
        onPress={() => dispatch(taskAdded({ description: input }))}
      >
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
