import React from 'react';
import Slider from './Slider';
import styles from './ProjectsGallery.module.css';

export default class ProjectsGallery extends React.Component {
  render() {
    return (
      <div id="PORTFOLIO" className={styles.container}>
        <Slider />
      </div>
    )
  }
}