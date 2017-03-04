import React, {Component} from 'react';
import appStore from '../AppStore/AppStore';

export class Todo extends Component {

    constructor() {
        super();
        this.state = {
            taskDesc: ""
        };
        this.keyUpHandler = this.keyUpHandler.bind(this);

        appStore.subscribe(() => {
            let newState = appStore.getState();
            if(newState && newState.tasks && newState.tasks.length){
                this.setState((prevState) => ({taskDesc: "" })); 
            } 
        });
    }

    clickHandler() {
        //appStore.dispatch({type : "ADD_TODO", payload : {text : "Hello world"} });
    }
    keyUpHandler(e) {
        let newVal = e.target.value;
        this.setState((prevState) => ({taskDesc: newVal}));
    }
    keyPressHandler(e) {
        let newVal = e.target.value;
        if (e.which === 13) {
            appStore.dispatch({
                type: "ADD_TODO",
                payload: {
                    text: newVal
                }
            });
        }
    }
    render() {
        return (
            <div onClick={this.clickHandler}>
                <label>
                    <input
                        id='txtNewTask'
                        onKeyPress={this.keyPressHandler}
                        onChange={this.keyUpHandler}
                        value={this.state.taskDesc}/>
                </label>
            </div>
        )
    }
}