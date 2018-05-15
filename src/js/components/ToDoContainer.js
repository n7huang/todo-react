import React from "react";

import Header from "./Header";
import Title from "./Header/Title";
import ToDoList from "./ToDoList";

export default class ToDoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addToDo(item) {
    this.setState({todos: this.state.todos.concat([item])});
  }

  removeToDo(i) {
    this.setState({todos: this.state.todos.filter((element, index, arr) => index !== i)});
  }

  editToDo(val, i) {
    this.setState({todos: this.state.todos.map((element, index, arr) => {
      return index === i && val !== "" ? val : element;
    })});
  }

  render() {
    return (
      <div>
        <Header title={"To-Do List"} />
        <ToDoList 
          todos={this.state.todos} 
          addToDo={this.addToDo.bind(this)}
          removeToDo={this.removeToDo.bind(this)}
          editToDo={this.editToDo.bind(this)} />
      </div>
    );
  }
}
