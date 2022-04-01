import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CarItem from "./src/CarItem";
import ToDo from "./src/TaskItem";
import { Provider } from "react-redux";
import configureStore from "./src/Redux/store";

const store = configureStore();

export default function App() {

  const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
  })

  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
