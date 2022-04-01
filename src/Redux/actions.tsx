import * as actionType from '../Redux/actionTypes';


export const taskAdded = description => ({
    type: actionType.TASK_ADDED,
    payload: {
        description
    }
});

export const taskRemoved = id => ({
    type: actionType.TASK_REMOVED,
    payload: {
        id
    }
});

export const taskCompleted = id => ({
    type: actionType.TASK_COMPLETED,
    payload: {
        id
    }
});

export const taskToggled = id => ({
    type: actionType.TASK_TOGGLED,
    payload: {
        id
    }
});

