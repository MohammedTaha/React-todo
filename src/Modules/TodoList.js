import React, {Component} from 'react';
import appStore from '../AppStore/AppStore';

export class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            tasks: []
        };
        appStore.subscribe(() => {
            this.setState((newState) => ({
                tasks: appStore
                    .getState()
                    .tasks
            }));
        });
    }
    render() {
        return (
            <ul id="tasksList">

                {this
                    .state
                    .tasks
                    .map((task, idx) => (

                        <li className="todoItem" key={idx}>

                            <label>
                                <div className="checkBoxContainer">
                                    <input type="checkbox"/>
                                </div>

                                <div className="taskDescContainer">
                                    {task.text}
                                </div>
                            </label>
                        </li>
                    ))}
            </ul>
        )
    }
}