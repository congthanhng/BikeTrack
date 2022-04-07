import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAppDispatch } from "../hooks";
import styles from "../../ToDoApp/style";
import { taskToggled, taskRemoved, selectTaskById } from "../slices/tasksSlice";
import { useSelector } from "react-redux";

const TaskListItem = ({id,task}) => {
//   const task = useSelector(selectTaskById(id));
  const dispatch = useAppDispatch();

  console.log("rebuild item:", id);
  return (
    <TouchableOpacity
      onPress={() => dispatch(taskToggled({ id: task.id }))}
    >
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text
            style={task.completed ? styles.itemTextComplete : styles.itemText}
          >
            {task.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(taskRemoved({ id: task.id }))}
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
};
export default TaskListItem;
