import React from "react";

import ToDoItem from "./ToDoItem"

export default class ToDoList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      editing: null,
    };
	}

	handleRemove(e) {
		this.props.removeToDo(e);
	}

	handleEdit(index, e) {
		if ( e.keyCode === 13 ) {	// on enter key press
			this.props.editToDo(e.target.value, index);
			this.setState({editing: null});
		}
	}

	handleAdd(e) {
    this.props.addToDo("new item");
  }

  toggleEdit(todoId) {
  	this.setState({editing: todoId});
  }

  renderItemOrEdit(todo, i) {
  	if (this.state.editing === i) {
  		return (
  			<li key={ `editing-${i}` } className="todo-list-item">
  				<button onClick={this.handleRemove.bind(this, i)} >Remove</button>
  				<input autoFocus
  					onKeyDown={this.handleEdit.bind(this, i)}
  					type="text"
  					className="ctrl"
  				/>
  			</li>
  		)
  	} else {
  		return (
  			<li key={i}
  					className="todo-list-item">
  				<button onClick={this.handleRemove.bind(this, i)} >Remove</button>
  				<span onClick={this.toggleEdit.bind(this, i)}>{todo}</span>
  			</li>
  		)
  	}
  }

  render() {
  	return (
  		<div>
	  		<ul className="todo-list">
		  		{ this.props.todos.map( (todo, i) => {
		  			return this.renderItemOrEdit(todo, i);
		  		})}
	  		</ul>
	  		<button onClick={this.handleAdd.bind(this)}>Add New Item</button>
  		</div>
  	);
  }

	// render() {
	// 	const listItems = this.props.todos.map((todo, i) => 
	// 		<li key={i}>
	// 			<button onClick={this.handleRemove.bind(this, i)} >Remove</button>
	// 			<button onClick={this.handleEdit.bind(this, todo)} >Edit</button>
	// 			{todo}
	// 		</li>);
 //    return (
 //    	<div>
	//       <ul>{listItems}</ul>
	//       <button onClick={this.handleAdd.bind(this)}>Add New Item</button>
	//     </div>
 //    );
 //  }
}