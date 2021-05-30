import React from 'react';
import styles from './NavLink.module.css';

export default class NavLink extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <a href="#">
          Home
        </a>
        <a href="#">
          Projects
        </a>
        <a href="#">
          Contact
        </a>
      </div>
    )
  }
}
