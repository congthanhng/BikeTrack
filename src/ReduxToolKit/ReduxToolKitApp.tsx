import React from "react";
import styles from "../ToDoApp/style";
import {
  Text,
  View,
  ScrollView,
} from "react-native";
import TaskList from "./components/TaskList";
import InputTask from "./components/InputTask";

// import { taskToggled } from "./taskSlice";

export const ReduxToolKitApp = () => {
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
          <Text style={styles.sectionTitle}>Today`s tasks</Text>
          <TaskList />
        </View>
      </ScrollView>
      <InputTask/>
    </View>
  );
};

