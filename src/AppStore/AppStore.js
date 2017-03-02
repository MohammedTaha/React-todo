import {createStore} from 'redux';
import {todoReducer} from './Reducers';


let appStore=createStore(todoReducer);

export default appStore;