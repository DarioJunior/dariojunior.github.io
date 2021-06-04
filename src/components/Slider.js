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
        <Card image={DevFinanceImage} url={"https://github.com/DarioJunior/dev-finance-app"}/>
        <a className={"carousel-item"} id={styles.item1} target="_Blank" href="https://github.com/DarioJunior/dev-finance-app"><img src={DevFinanceImage}/></a>
        <a className={"carousel-item"} id={styles.item2} href=""><img src="./Dev_Finance.png"/></a>
        <a className={"carousel-item"} id={styles.item3} href=""><img src="./Dev_Finance.png" alt="Ptojeto2"/></a>
        {/* <a className={"carousel-item"} id={styles.item4}  href=""><img src="./Dev_Finance.png"/></a> */}
        {/* <a className={"carousel-item"} id={styles.item5}  href=""><img src="./Dev_Finance.png"/></a> */}
      </div>
    )
  }
}