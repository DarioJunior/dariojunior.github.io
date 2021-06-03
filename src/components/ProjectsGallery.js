import React from 'react';
import Card from './Card';
import styles from './ProjectsGallery.module.css';

export default class ProjectsGallery extends React.Component {
  render() {
    return (
      <div id="PROJECTS" className={styles.container}>
        <Card />
      </div>
    )
  }
}