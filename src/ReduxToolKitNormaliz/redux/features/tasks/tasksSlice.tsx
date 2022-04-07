import { createSlice, createEntityAdapter, nanoid } from "@reduxjs/toolkit";
// import {
//   taskAddedHandle,
//   taskRemovedHandle,
//   taskCompletedHandle,
//   taskToggledHandle,
// } from "./caseReducerHandle";

export type TaskState = {
  id: number;
  description: String;
  completed: boolean;
};

export type TaskListState = TaskState[];

export const tasksAdapter = createEntityAdapter(
//   {
//   sortComparer: (a, b) => b.id.localeCompare(a.id)
// }
);
const initState = tasksAdapter.getInitialState({
  ids: ["First", "Second", "Thirst"],
  entities: {
    "First": {
      id: "First",
      description: "Learn React",
      completed: true,
    },
    "Second": {
      id: "Second",
      description: "Learn Redux",
      completed: false,
    },
    "Thirst": {
      id: "Thirst",
      description: "Build something fun!",
      completed: false,
    },
  },
});

// Define the initial state using that type
// const initialState: TaskListState = [
//   { id: 0, description: "Learn React", completed: true },
//   { id: 1, description: "Learn Redux", completed: false },
//   { id: 2, description: "Build something fun!", completed: false },
// ];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initState,
  reducers: {
    taskAdded: {
      reducer(state, {payload}) {
        // if (payload.description != "")
        //   state.entities[payload.id] = payload
        tasksAdapter.addOne(state,payload)
      },
      prepare(description) {
        const index = nanoid();
        return {
          payload: {
            id: index,
            description,
            completed: false
          },
        };
      },
    },

    taskRemoved: (state,{payload})=>{
      // delete state.entities[payload]
      tasksAdapter.removeOne(state,payload)
    },
    taskCompleted: (state,{payload})=>{
      const existState = state.entities[payload]
      if(existState){
        existState.completed = true
      }
      // tasksAdapter.updateOne(state, {id: payload.id, completed: true})
    },
    taskToggled: (state, {payload})=>{
      const existState = state.entities[payload]
      if(existState){
        existState.completed = !existState.completed
      }
      // tasksAdapter.updateOne(state, {id: payload, completed: !existState.completed})
    },
  },
});
// const selectTodoEntities = (state) => state.tasks;



export const { taskAdded, taskRemoved, taskCompleted, taskToggled } =
  tasksSlice.actions;
// Other code such as selectors can use the imported `RootState` type

export default tasksSlice.reducer;
