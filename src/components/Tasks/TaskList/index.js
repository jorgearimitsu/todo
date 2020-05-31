import React from 'react'
import styles from './styles.module.css'

const TaskList = ({tasks, removeTask}) => {
  const emptyList = (
    <div className={styles.emptyList}>
      <p>You don't have any task</p>
    </div>
  )

  const filledList = (
    <ul className={styles.list}>
      {tasks.map(task => (
        <li className={styles.task} key={task.id}>
          {task.name}

          <button type='button' onClick={() => removeTask(task.id)}>
            remove
          </button>
        </li>
      ))}
    </ul>
  )

  if (tasks.length === 0) {
    return emptyList
  } else {
    return filledList
  }
}

export default TaskList
