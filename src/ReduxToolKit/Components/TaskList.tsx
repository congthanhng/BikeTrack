import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../../ToDoApp/style";
import { useSelector } from "react-redux";
import { selectTasks, taskRemoved, taskToggled } from "../tasksSlice";
import { useAppDispatch } from "../hooks";

export default function TaskList() {
  const tasks = useSelector(selectTasks);
  const dispatch = useAppDispatch();
  console.log("TaskList rebuild");
  return (
    <View style={styles.items}>
      {/* This is where the tasks will go! */}
      {tasks.map((item, index) => {
        // console.log("rebuild");
        return (
          <TouchableOpacity
            key={index}
            onPress={() => dispatch(taskToggled({ id: item.id }))}
          >
            <View style={styles.item}>
              <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text
                  style={
                    item.completed ? styles.itemTextComplete : styles.itemText
                  }
                >
                  {item.description}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => dispatch(taskRemoved({ id: item.id }))}
              >
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>Remove</Text>
                </View>
              </TouchableOpacity>
              {/* <View style={styles.circular}></View> */}
            </View>
            {/* <Task
                    text={item.description}
                    isCompleted={item.completed}
                    removeTask={() => dispatch(taskRemoved({ id: item.id }))}
                  /> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
