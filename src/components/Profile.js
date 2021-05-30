import React from 'react';
import styles from './Profile.module.css';

export default class Profile extends React.Component {
  render() {
    const PROFILE_URL = 'https://avatars.githubusercontent.com/u/53787626?s=400&u=7814d358ff63ec0b436fbc62e264a89be5f19849&v=4';
    const TRYBE_URL = 'https://betrybe.com';
    return (
      <div className={styles.container} >
      <div className={styles.profileContainer}>
        <img className={styles.profile} src={PROFILE_URL} alt="Profile Picture" />
      </div>

      <div className={styles.aboutContainer}>
        <p className={ styles.aboutText }>
          &lt; Olá Mundo / &gt;
        </p>
          <p>
            Me chamo Dário Junior, atualmente estudo Análise e Desenvolvimento de Sistemas pelo SENAC, e Desenvolvimento Web pela <a className={ styles.trybe } target="_blank" href={ TRYBE_URL }>Trybe.</a>
        </p>
      </div>
      </div>
    )
  }
}