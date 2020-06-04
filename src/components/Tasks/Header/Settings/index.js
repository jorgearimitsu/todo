import React, { Component, createRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./styles.module.css";

class Settings extends Component {
  state = {
    isOpen: false,
  }

  settingsRef = createRef();

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  isOutsideClick = (e) => (
    this.settingsRef &&
    !this.settingsRef.current.contains(e.target)
  )

  handleOutsideClick = (e) => {
    if (this.isOutsideClick(e)) {
      this.setState({isOpen: false})
    }
  }

  componentDidUpdate() {
    if (this.state.isOpen) {
      document.addEventListener('click', this.handleOutsideClick)
    } else {
      document.removeEventListener('click', this.handleOutsideClick)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  render() {
    let settings = null

    if (this.state.isOpen) {
      settings = (
        <ul className={styles.settings} ref={this.settingsRef}>
          <li
            className={styles.clearTasks}
            onClick={this.props.clearTasks}
          >
            Clear Tasks
          </li>
        </ul>
      )
    }

    return (
      <>
        <button
          className={styles.settingsToggler}
          onClick={this.toggleOpen}
        >
          <FontAwesomeIcon icon="ellipsis-v" />
        </button>

        {settings}
      </>
    )
  }
}

export default Settings
