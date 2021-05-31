import React from 'react';
import styles from './Contact.module.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div id="CONTACT" className={styles.container}>
        <p>
          Dário Cezar Moreira Tôrres Junior
        </p>
        <p>
          📧 dario.junior.rs@gmail.com
        </p>
        <p>
          📞 +55 (55) 9 96629005 
        </p>
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