import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './Header'
import TaskAdd from './TaskAdd'
import TaskList from './TaskList';
import styles from './styles.module.css'

class Tasks extends Component {
  state = {
    tasks: [
      this.buildTask('Make coffee'),
      this.buildTask('Watch Netflix'),
      this.buildTask('Sleep'),
    ],

    taskName: ''
  }

  buildTask(name) {
    return { id: uuidv4(), name, done: false }
  }

  taskNameHandler = (e) => {
    this.setState({taskName: e.currentTarget.value})
  }

  addTaskHandler = (e) => {
    e.preventDefault()

    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        this.buildTask(this.state.taskName)
      ],

      taskName: ''
    }))
  }

  removeTaskHandler = (id) => {
    let filteredTasks = this.state.tasks.filter(task => task.id !== id)

    this.setState({tasks: filteredTasks})
  }

  completeTaskHandler = (task) => {
    task.done = !task.done

    this.setState(prevState => ({
      tasks: prevState.tasks.filter(prevTask => prevTask.id !== task.id)
        .concat([task])
    }))
  }

  render() {
    return (
      <div className={styles.tasks}>
        <Header tasks={this.state.tasks} />

        <TaskAdd
          addTask={this.addTaskHandler}
          addTaskName={this.taskNameHandler}
          taskName={this.state.taskName}
        />

        <TaskList
          tasks={this.state.tasks}
          removeTask={this.removeTaskHandler}
          completeTask={this.completeTaskHandler}
        />
      </div>
    )
  }
}

export default Tasks
