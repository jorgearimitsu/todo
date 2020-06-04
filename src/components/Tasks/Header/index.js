import React from 'react'
import TaskCounter from './TaskCounter'
import styles from './styles.module.css'


const Header = ({tasks}) => {
  const completedTasks = tasks.filter(task => task.done === true)
  const remainingTasks = tasks.filter(task => task.done === false)

  return (
    <header>
      <h1 className={styles.title}>My Tasks</h1>

      <div className={styles.taskInfo}>
        <TaskCounter
          className={styles.remaining}
          tasks={remainingTasks}
          text="remaining"
        />
        <TaskCounter
          tasks={completedTasks}
          text="completed"
        />
      </div>

    </header>
  )
}

export default Header
