import React from 'react';
import styles from './Slider.module.css';
import Card from './Card';
import DevFinanceImage from './Dev_Finance.png';


export default class Slider extends React.Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {}); 
    });
  }
  render() {
    return (
      <div className="carousel" id={styles.Carousel}>
        <div className={"carousel-item"} id={styles.item1} >
          <Card image={DevFinanceImage} url={"https://github.com/DarioJunior/dev-finance-app"}/>
        </div>
        <div className={"carousel-item"} id={styles.item2} >
          <Card image={DevFinanceImage} url={"https://github.com/DarioJunior/dev-finance-app"}/>
        </div>
        <div className={"carousel-item"} id={styles.item3} >
          <Card image={DevFinanceImage} url={"https://github.com/DarioJunior/dev-finance-app"}/>
        </div>
      </div>
    )
  }
}