import * as actionType from "./actionTypes";

const initialState = [
  { id: 0, description: "Learn React", completed: true },
  { id: 1, description: "Learn Redux", completed: false },
  { id: 2, description: "Build something fun!", completed: false },
];

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.TASK_ADDED: {
      let index = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      if(action.payload.description == "") return state;
      return [
        ...state,
        {
          id: index,
          description: action.payload.description,
          completed: false,
        },
      ];
    }
    case actionType.TASK_REMOVED:
      return state.filter((task) => task.id !== action.payload.id);
    case actionType.TASK_COMPLETED:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      );
    case actionType.TASK_TOGGLED:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
}
