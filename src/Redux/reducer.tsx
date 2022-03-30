
import * as actions from './actionTypes';

let lastId = 0;
export default function reducer(state = [], action) {
    switch(action.type){
        case actions.TASK_ADDED: return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                completed: false
            }
        ];
        case actions.TASK_REMOVED: return state.filter(task => task.id !== action.payload.id); 
        case actions.TASK_COMPLETED: return state.map(task => task.id === action.payload.id ? {...task,completed: true} : task)
        default: return state;
    }
}