import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Task from "../Components/Task";
import * as taskActions from "../Redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./style";

let valueChange = "";

class ToDoApp extends React.Component {
  addTask() {
    let { tasks, actions } = this.props;
    actions.taskAdded(valueChange);
  }

  completeTask(id) {
    let { tasks, actions } = this.props;
    actions.taskCompleted(id);
  }

  toggleTask(id) {
    let { tasks, actions } = this.props;
    actions.taskToggled(id);
  }

  removeTask(id) {
    let { tasks, actions } = this.props;
    actions.taskRemoved(id);
  }

  render() {
    const { tasks } = this.props;
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
            <View style={styles.items}>
              {/* This is where the tasks will go! */}
              {tasks.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.toggleTask(item.id)}
                  >
                    <Task
                      text={item.description}
                      isCompleted={item.completed}
                      removeTask={() => this.removeTask(item.id)}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>

        <View style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={"Write a task"}
            onChangeText={(text) => (valueChange = text)}
          />
          <TouchableOpacity onPress={() => this.addTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.todo,
});

const ActionCreators = Object.assign({}, taskActions);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
