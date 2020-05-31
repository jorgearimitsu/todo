import React from 'react'
import styles from './styles.module.css'

const TaskAdd = ({addTaskName, taskName, addTask}) => (
  <form className={styles.taskAdd} onSubmit={addTask}>
    <input
      className={styles.input}
      onChange={addTaskName}
      placeholder="type your task"
      type="text"
      value={taskName}
    />

    <button className={styles.button}>
      Add
    </button>
  </form>
)

export default TaskAdd
