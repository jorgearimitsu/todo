import React, { Component } from 'react'
import TaskAdd from './TaskAdd'
import TaskList from './TaskList';
import styles from './styles.module.css'

class Tasks extends Component {
  state = {
    tasks: [
      {id: 1, name: 'Make coffee'},
      {id: 2, name: 'Watch Netflix'},
      {id: 3, name: 'Sleep'},
    ]
  }

  render() {
    return (
      <div className={styles.tasks}>
        <h1>Task Manager</h1>

        <TaskAdd />
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
}

export default Tasks
