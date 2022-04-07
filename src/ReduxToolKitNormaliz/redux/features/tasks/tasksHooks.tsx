import { createSelector } from "reselect";
import { tasksAdapter } from "./tasksSlice";

export const {
    selectAll: selectAllTasks,
    // selectById: selectTaskById,
    selectIds: selectTaskIds
    // Pass in a selector that returns the tasks slice of state
  } = tasksAdapter.getSelectors(state => state.tasks)

// export const selectTaskEntities = (state: RootState) => state.tasks.entities;

// export const selectTasks = createSelector(
//     selectTaskEntities, 
//     (entities) => entities
// )

export const selectTaskById = (id) => createSelector(
    selectAllTasks,
    (tasks) => tasks.find((task) => task.id === id)
)
