import React, { Component } from 'react';
import Overview from './components/Overview';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskTitle: '',
      tasks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  handleChange(e) {
    this.setState({
      taskTitle: e.target.value,
    });
  }

  addTask(e) {
    e.preventDefault();
    const task = {
      id: uuidv4(),
      title: this.state.taskTitle,
    };

    this.setState({
      tasks: this.state.tasks.concat(task),
      taskTitle: '',
    });
  }

  deleteTask(id) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  }

  editTask(id, newTitle) {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          return {
            id,
            title: newTitle,
          };
        }
        return task;
      }),
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.addTask}>
          <label htmlFor="title">New Task</label>
          <input
            placeholder="Task name"
            type="text"
            name="title"
            value={this.state.taskTitle}
            onInput={this.handleChange}
            required
          />
          <button type="submit">Create task</button>
        </form>
        <Overview editChild={this.editTask} deleteChild={this.deleteTask}>
          {this.state.tasks}
        </Overview>
      </>
    );
  }
}

export default App;
