import React from 'react';
import styles from './NavLink.module.css';

export default class NavLink extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <a href="#">
          Home
        </a>
        <a href="#PROJECTS">
          Projects
        </a>
        <a href="#CONTACT">
          Contact
        </a>
      </div>
    )
  }
}
