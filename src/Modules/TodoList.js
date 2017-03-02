import React, {Component} from 'react';
import appStore from '../AppStore/AppStore';

export class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            tasks: []
        };
        appStore.subscribe(() => {
            this.setState((newState) => ({tasks: appStore.getState().tasks}));
        });
    }
    render() {
        return (
            <ul>
                {this.state.tasks.map( (task, idx) =>  (
                     <li key={idx}>{task.text}</li>
                ))}
            </ul>
        )
    }
}