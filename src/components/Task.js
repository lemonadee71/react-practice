import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      newTitle: this.props.info.title,
    };
  }

  saveChanges = (e) => {
    e.preventDefault();
    this.props.editHandler(this.props.info.id, this.state.newTitle);
    this.setState({
      isEditing: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      newTitle: e.target.value,
    });
  };

  handleDelete = () => {
    this.props.deleteHandler(this.props.info.id);
  };

  handleClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  render() {
    return (
      <li>
        {this.state.isEditing ? (
          <form onSubmit={this.saveChanges}>
            <input
              type="text"
              value={this.state.newTitle}
              onInput={this.handleChange}
              required
            />
            <button type="submit">Save Changes</button>
          </form>
        ) : (
          <>
            <span>{this.props.info.title}</span>
            <button onClick={this.handleClick}>Edit Task</button>
            <button onClick={this.handleDelete}>&times;</button>
          </>
        )}
      </li>
    );
  }
}

export default Task;
