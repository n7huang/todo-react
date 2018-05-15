import React from "react";

import Header from "./Header";
import Title from "./Header/Title";
import ToDoList from "./ToDoList.jsx";

export default class ToDoContainer extends React.Component {

  state = { // if state does not rely on props, can just define like this
    todos: []
  }

  addToDo = (text) => { // arrow functions! ES6
    const item = { // items are now objects: {text, id}
      text,
      id: Math.floor(Math.random() * Math.floor(400)) // TODO: change this to UUID
    };

    this.setState({todos: this.state.todos.concat([item])});
  }

  removeToDo = (todoId) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === todoId);

    if (index > -1) {
      this.setState({
        todos:  todos.slice(0, index).concat(todos.slice(index + 1))
      })
    }
  }

  editToDo = (text, todoId) => {
    // this.setState({todos: this.state.todos.map((element, index, arr) => {
    //   return index === i && val !== "" ? val : element;
    // })});

    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === todoId);

    if (index > -1) {
      this.setState({
        todos:  todos.slice(0, index)
                .concat([{
                  ...todos[index],
                  text
                }])
                .concat(todos.slice(index + 1))
      })
    }
  }
  // main change: => instead of bind
  render() {
    console.log(this.state.todos);
    return (
      <div>
        <div>Total: {this.state.todos.length}</div>
        <Header title={"To-Do List"} />
        <ToDoList 
          todos={this.state.todos} 
          addToDo={this.addToDo}
          removeToDo={this.removeToDo}
          editToDo={this.editToDo} />
      </div>
    );
  }
}
