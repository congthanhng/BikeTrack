import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import styles from '../ToDoApp/style';
import TaskList from './components/TaskList';
import InputTask from './components/InputTask';


export default function ReduxToolKitNormalizApp() {
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
}