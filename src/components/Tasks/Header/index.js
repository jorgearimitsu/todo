import React from 'react'
import TaskCounter from './TaskCounter'
import Settings from './Settings'
import styles from './styles.module.css'


const Header = ({tasks, clearTasks}) => {
  const completedTasks = tasks.filter(task => task.done === true)
  const remainingTasks = tasks.filter(task => task.done === false)

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>To Do</h1>

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

      <Settings clearTasks={clearTasks} />
    </header>
  )
}

export default Header
