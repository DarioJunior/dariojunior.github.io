import React from 'react';

import NavLink from './NavLink';

import styles from './Header.module.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <p className={styles.logo}>DárioJr.</p>
        </div>
        <NavLink />
      </div>
    )
  }
}