import React from 'react';
import Project1 from './Dev_Finance.png';

import styles from './ProjectsGallery.module.css';

export default class ProjectsGallery extends React.Component {
  render() {
    return (
      <div id="PROJECTS" className={styles.container}>
        {/* <a href="#HOME">home</a> */}
        <a target="_blank" href="https://dariojunior.github.io/devfinance">
          <div>
            <img src={Project1} alt="Dev Finance"/>
          </div>
        </a>
        <div>
          Podcastr
        </div>
        <div>
          Project 3
        </div>
        <div>
          Project 4
        </div>
        <div>
          X
        </div>
        <div>
          X
        </div>
        <div>
          X
        </div>
        <div>
          X
        </div>
      </div>
    )
  }
}