import React, { Component } from 'react';
import {Todo} from './Modules/Todo';
import {TodoList} from './Modules/TodoList';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Your TODOs</h2>
        <Todo/>
        <TodoList/>
      </div> 
    );
  }
}

export default App;
