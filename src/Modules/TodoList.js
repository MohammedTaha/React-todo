import React, {Component} from 'react';
import appStore from '../AppStore/AppStore';

export class TodoList extends Component {

    constructor() {
        super();
        this.checkBoxChangeHandler = this.checkBoxChangeHandler.bind(this);
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
    checkBoxChangeHandler(eve){
        if(eve.target.checked){
            appStore.dispatch({type : 'MARK_AS_COMPLETED', payload : {_id : eve.target.getAttribute('data-id')} });
        }
    }
    render() {   
        return (
            <ul id="tasksList">
                {this
                    .state
                    .tasks
                    .map((task, idx) => (

                        <li className={"todoItem " + (task.isCompleted ? 'isDone' :'' )} key={idx} >

                            <label>
                                <div className="checkBoxContainer">
                                    <input type="checkbox" data-id={task._id} disabled={task.isCompleted} onChange={this.checkBoxChangeHandler}/>
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