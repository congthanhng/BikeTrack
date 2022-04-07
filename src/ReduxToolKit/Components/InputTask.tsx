import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../ToDoApp/style';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/hooks';
import { textChanged } from '../redux/features/input/inputSlice';
import { taskAdded } from '../redux/features/tasks/tasksSlice';
import { selectInput } from '../redux/features/input/inputHooks';

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
  export default InputTask