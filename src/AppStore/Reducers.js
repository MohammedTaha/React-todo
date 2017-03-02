
export function todoReducer(state = {}, action) {

    let newState;
    switch (action.type) {
        case 'ADD_TODO':
            newState = {...state};
            newState.tasks = state.tasks || [];
            newState.tasks.push(action.payload);
            break;
        default:
            newState = state;
    }

    return newState;
}