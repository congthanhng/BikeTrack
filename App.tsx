import React from "react";
import { Provider } from "react-redux";
import todoStore from "./src/ToDoApp/redux/store";
import ToDoApp from "./src/ToDoApp";
import { AppRegistry } from 'react-native';
import {toolKitStore} from "./src/ReduxToolKit/redux/store"
import { ReduxToolKitApp } from "./src/ReduxToolKit/ReduxToolKitApp";


// const store = todoStore();

// export default function App() {
//   const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
//   });

//   return (
//     <Provider store={store}>
//       <ToDoApp />
//     </Provider>
//   );
// }

export default function App() {
  const unsubscribe = toolKitStore.subscribe(() => {
    console.log(toolKitStore.getState());
  });

  return (
    <Provider store={toolKitStore}>
      <ReduxToolKitApp />
    </Provider>
  );
}
