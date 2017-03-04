import React, {Component} from 'react';
import {Todo} from './Modules/Todo';
import {TodoList} from './Modules/TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <section id="todoListContainer">
          <header id="todoListHeader">
            <h2>
              ToDo List
            </h2>
          </header>

          <article id="todoListBody">
            <TodoList/>
            <footer id="newTaskContainer">
              <div id="taskDescPlaceHolder">
                <Todo/>
              </div>
            </footer>
          </article>

        </section>
      </div>
    );
  }
}

export default App;
