import React from "react";

import ToDoItem from "./ToDoItem.jsx";

export default class ToDoList extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
 //      editing: null,
 //    };
	// }

	state = {
		editing: null
	}

	handleRemove = (todoId) => {
		this.props.removeToDo(todoId);
	}

	handleEdit = (e, todoId) => {
		this.props.editToDo(e.target.value, todoId);
	}

	handleAdd = (e) => {
    this.props.addToDo("<Click To Edit>");
  }

  render() {
  	return (
  		<div>
        <button onClick={this.handleAdd}>Add New Item</button>
	  		<ul className="todo-list">
		  		{ this.props.todos.map( todo => 
            <ToDoItem key={todo.id} 
              todo={todo}
              handleRemove={this.handleRemove}
              handleEdit={this.handleEdit} />
		  		)}
	  		</ul>
  		</div>
  	);
  }
}