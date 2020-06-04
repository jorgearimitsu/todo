import React from 'react'
import classNames from 'classnames';

import styles from './styles.module.css'

const TaskCounter = ({tasks, text, className}) => {
  const taskCounterClass = classNames(styles.taskCounter, className)

  if (tasks.length > 0) {
    return (
      <p className={taskCounterClass}>
        {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} {text}
      </p>
    )
  } else {
    return null
  }
}

export default TaskCounter
