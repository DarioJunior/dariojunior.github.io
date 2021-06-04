import React from 'react';

import styles from './Projects.module.css';

export default class Projects extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <a href="#PORTFOLIO">
          <div>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML"/> 
          </div>
        </a>
        <a href="#PORTFOLIO">
        <div>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS"/>  
          </div>
        </a>
        <a href="#PORTFOLIO">
          <div>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Javascript"/>
          </div>
        </a>
        <a href="#PORTFOLIO">
          <div>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="ReactJS"/>
          </div>
        </a>
      </div> 
    )
  }
}