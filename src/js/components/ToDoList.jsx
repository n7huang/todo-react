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

  // changed to edit based on index instead
  // renderItemOrEdit(todo) {
  // 	if (this.state.editing === todo.id) {
  // 		return (
  // 			<li key={ `editing-${todo.id}` } className="todo-list-item">
  // 				<button onClick={() => this.handleRemove(todo.id)} >Remove</button>
  // 				<input autoFocus
  // 					onKeyDown={e => this.handleEdit(e, todo.id)}
  // 					type="text"
  // 					className="ctrl"
  // 				/>
  // 			</li>
  // 		)
  // 	} else {
  // 		return (
  // 			<li key={todo.id}
  // 					className="todo-list-item">
  // 				<button onClick={() => this.handleRemove(todo.id)} >Remove</button>
  // 				<span onClick={() => this.toggleEdit(todo.id)}>{todo.text}</span>
  // 			</li>
  // 		)
  // 	}
  // }

  /*this.renderItemOrEdit(todo)*/ // was in map
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