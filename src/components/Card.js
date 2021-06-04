import React from 'react';
// import DevFinanceImage from './Dev_Finance.png';
import styles from "./Card.module.css";

export default class Card extends React.Component {
  constructor(){
    super()
  }
  render() {
    const { image, url } = this.props;
    return(
      <div className={"carousel-item"} id={styles.container}>
        <div className={"row"} id={styles.row}>
              <div className="card" >
                <div className="card-image" id={styles.cartTitle}>
                  <img src={image} alt="ESTE EH O CARD" id={styles.row}/>
                  <span classNames="card-title" >Dev Finance - Rocketseat</span>
                </div>
                <div className="card-content" id={styles.contentContainer}>
                  <p>Projeto realizado em conjunto, durante a Maratona Discover, utilizando HTML, CSS e Javascript vanilla.</p>
                </div>
                <div className="card-action" id={styles.linkContainer}>
                  <a href={url}>Acesse o repositório</a>
                </div>
              </div>
          </div>
      </div>

    )
  }
}