import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css'

const TaskList = ({tasks, removeTask, completeTask}) => {
  const emptyList = (
      <p className={styles.emptyList}>
        <FontAwesomeIcon
          icon="exclamation-triangle"
          className={styles.emptyListIcon}
        />
        You don't have any task
      </p>
  )

  const filledList = (
    <ul className={styles.list}>
      {tasks.map(task => {
        const taskClass = classNames(styles.task, { [styles.done]: task.done })

        return (
          <li className={taskClass} key={task.id}>
            <div className={styles.taskInfo}>
              <button
                className={styles.completeButton}
                onClick={() => completeTask(task)}
                type="button"
              >
                <FontAwesomeIcon
                  icon={task.done ? 'check-circle' : ['far', 'circle']}
                />
              </button>

              <p className={styles.taskName}>
                {task.name}
              </p>
            </div>


            <button
              className={styles.deleteButton}
              onClick={() => removeTask(task.id)}
              type='button'
            >
              <FontAwesomeIcon icon="trash-alt" />
            </button>
          </li>
        )
      })}
    </ul>
  )

  if (tasks.length === 0) {
    return emptyList
  } else {
    return filledList
  }
}

export default TaskList
