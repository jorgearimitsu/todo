import React from 'react'
import styles from './styles.module.css'

const Header = ({tasks}) => {
  return (
    <header>
      <h1 className={styles.title}>My Tasks</h1>

      {tasks.length > 0 && (
        <p className={styles.remaining}>
          {tasks.length} tasks remaining
        </p>
      )}
    </header>
  )
}

export default Header
