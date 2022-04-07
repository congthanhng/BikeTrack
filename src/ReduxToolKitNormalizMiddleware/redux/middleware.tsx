import { taskAdded } from "./features/tasks/tasksSlice"


export const print1 = (storeAPI) => (next) => (action) => {
    console.log('1')
    return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
    console.log('2')
    return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
    console.log('3')
    return next(action)
}
export const loggerMiddleware = storeAPI => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', storeAPI.getState())
    return result
}


//thunk middleware
export const exampleThunkFunction = (dispatch, getState) => {
    const stateBefore = getState()
    console.log(`Counter before: ${stateBefore.tasks}`)
    dispatch(taskAdded("ok"))
    const stateAfter = getState()
    console.log(`Counter after: ${stateAfter.tasks}`)
}