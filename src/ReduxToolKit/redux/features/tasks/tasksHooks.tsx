import { RootState } from "../../store";

export const selectTaskList = (state) => state.tasks;


// export const selectTasks = createSelector(selectTaskList, (tasks) => Object.values(tasks))

// export const selectTaskIds = createSelector(
//   selectTaskList,
//   (tasks) => tasks.map(task => task.id)
// )

// export const selectTaskById = (id) => createSelector(
//   selectTaskList,
//   (tasks)=> tasks[id]
// )