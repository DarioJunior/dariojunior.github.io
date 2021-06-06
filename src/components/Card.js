import React from 'react';
// import DevFinanceImage from './Dev_Finance.png';
import styles from "./Card.module.css";

export default class Card extends React.Component {

  render() {
    const { image, url, title, desc } = this.props;
    return(
      <div id={styles.container}>
        <div className={"row"} id={styles.row}>
              <div className="card" >
                <div className="card-image" id={styles.cardTitle}>
                  <img src={image} alt="Projeto" id={styles.row}/>
                  <span classNames="card-title" >{title}</span>
                </div>
                <div className="card-content" id={styles.contentContainer}>
                  <p>
                    {desc}
                  </p>
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