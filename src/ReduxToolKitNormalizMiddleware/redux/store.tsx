import { configureStore } from "@reduxjs/toolkit";
import  inputReducer  from "./features/input/inputSlice";
import tasksReducer from "./features/tasks/tasksSlice";
import  weatherReducer from "./features/weather/weatherSlice";
import { loggerMiddleware } from "./middleware";
import { applyMiddleware } from "redux";


const middlewareEnhancer = applyMiddleware(loggerMiddleware)


export const toolKitNormalizMiddlewareStore = configureStore({
    reducer: {
        tasks: tasksReducer,
        input: inputReducer,
        weather: weatherReducer
    },
},)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof toolKitNormalizMiddlewareStore.getState>
// Inferred type: {tasks: TasksState,}
export type AppDispatch = typeof toolKitNormalizMiddlewareStore.dispatch