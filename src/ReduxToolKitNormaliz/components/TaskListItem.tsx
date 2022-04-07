import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAppDispatch } from "../redux/hooks";
import styles from "../../ToDoApp/style";
import {
  taskToggled,
  taskRemoved,
} from "../redux/features/tasks/tasksSlice";
import { shallowEqual, useSelector } from "react-redux";
import { selectTaskById } from "../redux/features/tasks/tasksHooks";
// import { selectTaskById } from "../redux/features/tasks/tasksSlice";

const TaskListItem = ({ id }) => {
  const task = useSelector(selectTaskById(id));
  // const task = useSelector(selectTaskById(id));

  const dispatch = useAppDispatch();

  console.log("rebuild item:", task);
  return (
    <TouchableOpacity onPress={() => dispatch(taskToggled(id))}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text
            style={task.completed ? styles.itemTextComplete : styles.itemText}
          >
            {task.description}
          </Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(taskRemoved(id))}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Remove</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default TaskListItem;
