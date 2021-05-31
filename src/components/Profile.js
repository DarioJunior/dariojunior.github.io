import React from 'react';
import styles from './Profile.module.css';

export default class Profile extends React.Component {
  render() {
    const PROFILE_URL = 'https://avatars.githubusercontent.com/u/53787626?s=400&u=7814d358ff63ec0b436fbc62e264a89be5f19849&v=4';
    const TRYBE_URL = 'https://betrybe.com';
    return (
      <div className={styles.container} >
      <div className={styles.profileContainer}>
        <img className={styles.profile} src={PROFILE_URL} alt="Profile" />
      </div>

      <div className={styles.aboutContainer}>
        <p className={ styles.aboutText }>
          &lt; Hello World / &gt;
        </p>
        <p>
          Hi! I'm Dário Junior, I'm looking for an opportunity to make part of the technology community. 
          <p>
            Currently, I'm a Front-end Developer and soon Full-Stack Developer, I'm study System Analsys by SENAC and  Web Development By <a className={ styles.trybe } target="_blank" href={ TRYBE_URL }>Trybe.</a>
          </p>
        </p>
      </div>
      <div className={styles.iconContainer}>
          <a className={styles.mediaIcon} href="https://github.com/DarioJunior" target="_blank">
            <img src="https://cdn.iconscout.com/icon/free/png-256/github-108-438008.png" />
          </a>
          <a className={styles.mediaIcon} href="https://www.linkedin.com/in/dario-junior/" target="_blank">
            <img src="https://i.ibb.co/Kx2GSrT/linkedin.png" />
          </a>
          <a className={styles.mediaIcon} href="https://www.instagram.com/dariojunior_" target="_blank">
            <img src="https://camo.githubusercontent.com/109977a284aefe0c20628563ac58b29776daad72fdaf4bdbff46cbc34c922a03/68747470733a2f2f63646e2e69636f6e2d69636f6e732e636f6d2f69636f6e73322f313231312f504e472f3531322f313439313537393630322d79756d6d696e6b79736f6369616c6d6564696133365f38333036372e706e67" />
          </a>
        </div>
      </div>
    )
  }
}