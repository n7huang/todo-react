import React from "react";

export default class ToDoItem extends React.Component {

	state = {
		editing: false
	}

	handleRemove = (todoId) => {
		this.props.handleRemove(todoId);
	}

	handleEdit = (e, todoId) => {
		if ( e.keyCode === 13 ) {
			this.props.handleEdit(e, todoId);
			this.setState({editing: false});
		}
	}

	toggleEdit(todoId) {
  	this.setState({editing: true});
  }

	render() {
		const todo = this.props.todo;
		if (this.state.editing) {
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

}