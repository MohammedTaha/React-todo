
let id = 0; 
export function todoReducer(state = {}, action) {

    let newState;
    switch (action.type) {
        case 'ADD_TODO':
            newState = {...state};
            newState.tasks = state.tasks || [];
            action.payload._id = ++id +"";
            newState.tasks.push(action.payload);
            break;
        case 'MARK_AS_COMPLETED':

            newState = {...state};
            if(newState.tasks){
                for(var i =0 ; i < newState.tasks.length; i++){
                    if(newState.tasks[i]._id === action.payload._id){
                        newState.tasks[i].isCompleted = true;
                        break;
                    }
                }
            }
            break;
        default:
            newState = state;
    }

    return newState;
}