import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TaskAdd from './TaskAdd'
import TaskList from './TaskList';
import styles from './styles.module.css'

class Tasks extends Component {
  state = {
    tasks: [
      {id: uuidv4(), name: 'Make coffee'},
      { id: uuidv4(), name: 'Watch Netflix'},
      { id: uuidv4(), name: 'Sleep'},
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
