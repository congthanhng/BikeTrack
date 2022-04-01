import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/Redux/store";
import ToDoApp from "./src/ToDoApp";
import { AppRegistry } from 'react-native';

const store = configureStore();

export default function App() {
  const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
  });

  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
}
