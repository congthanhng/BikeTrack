import * as actions from '../Redux/actionTypes';

// export function taskAdded(description){
//     return {
//         type: actions.TASK_ADDED,
//         payload: {
//           description
//         }
//       }
// }

export const taskAdded = description => ({
    type: actions.TASK_ADDED,
    payload: {
        description
    }
});

export const taskRemoved = id => ({
    type: actions.TASK_REMOVED,
    payload: {
        id
    }
});
export const taskCompleted = id => ({
    type: actions.TASK_COMPLETED,
    payload: {
        id
    }
});

// export function taskRemoved(id){
//     return {
//         type: actions.TASK_REMOVED,
//         payload: {
//           id
//         }
//       }
// }