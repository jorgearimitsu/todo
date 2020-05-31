import React from 'react'
import styles from './styles.module.css'

const TaskAdd = () => (
  <div className={styles.taskAdd}>
    <input
      className={styles.input}
      placeholder="type your task"
      type="text"
    />

    <button className={styles.button} type="button">
      Add
    </button>
  </div>
)

export default TaskAdd
