import React from 'react'
import styles from './styles.module.css'

const EmptyList = () => (
  <div className={styles.emptyList}>
    <p>You don't have any task</p>
  </div>
)

const FilledList = ({tasks}) => (
  <ul className={styles.list}>
    {tasks.map(task => (
      <li className={styles.task} key={task.id}>
        {task.name}
      </li>
    ))}
  </ul>
)

const TaskList = ({tasks}) => {
  if (tasks.length === 0) {
    return <EmptyList />
  } else {
    return <FilledList tasks={tasks} />
  }
}

export default TaskList
