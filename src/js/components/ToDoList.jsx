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

	handleRemove(todoId) {
		this.props.removeToDo(todoId);
	}

	handleEdit(e, todoId) {
		if ( e.keyCode === 13 ) {	// on enter key press
			this.props.editToDo(e.target.value, todoId);
			this.setState({editing: null});
		}
	}

	handleAdd = (e) => {
    this.props.addToDo("<Click To Edit>");
  }

  toggleEdit(todoId) {
  	this.setState({editing: todoId});
  }

  // changed to edit based on index instead
  renderItemOrEdit(todo) {
  	if (this.state.editing === todo.id) {
  		return (
  			<li key={ `editing-${todo.id}` } className="todo-list-item">
  				<button onClick={() => this.handleRemove(todo.id)} >Remove</button>
  				<input autoFocus
  					onKeyDown={e => this.handleEdit(e, todo.id)}
  					type="text"
  					className="ctrl"
  				/>
  			</li>
  		)
  	} else {
  		return (
  			<li key={todo.id}
  					className="todo-list-item">
  				<button onClick={() => this.handleRemove(todo.id)} >Remove</button>
  				<span onClick={() => this.toggleEdit(todo.id)}>{todo.text}</span>
  			</li>
  		)
  	}
  }

  render() {
  	return (
  		<div>
	  		<ul className="todo-list">
		  		{ this.props.todos.map( todo => 
		  			this.renderItemOrEdit(todo)
		  		)}
	  		</ul>
	  		<button onClick={this.handleAdd}>Add New Item</button>
  		</div>
  	);
  }
}