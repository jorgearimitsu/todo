import React from 'react'
import styles from './styles.module.css'

const EmptyList = () => (
  <div className={styles.emptyList}>
    <p>You don't have any task</p>
  </div>
)

const FilledList = ({tasks, removeTask}) => (
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

const TaskList = ({tasks, removeTask}) => {
  if (tasks.length === 0) {
    return <EmptyList />
  } else {
    return <FilledList tasks={tasks} removeTask={removeTask} />
  }
}

export default TaskList
