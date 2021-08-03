import React from 'react';
import styles from './Slider.module.css';
import Card from './Card';

import DevFinanceImage from './Dev_Finance_App_Gif.gif';
import PodcastrImage from './Podcastr_App_Gif2.gif'
import TriviaImage from './GIF_TRIVIA.gif';

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
          <Card
            image={TriviaImage}
            url={"https://github.com/DarioJunior/sd-011-project-trivia-react-redux/tree/main-group-20"}
            title="Trivia Projects"
            desc={"Projeto realizado em grupo, utilizando metodologias ágeis como Scrum e Kanban para gerenciamento, as tecnologias utilizadas foram HTML, CSS, React, Redux."}
          />
        </div>
        <div className={"carousel-item"} id={styles.item1} >
          <Card 
            image={PodcastrImage}
            url={"https://github.com/DarioJunior/nlw-5-podcastr"}
            title="Podcastr"
            desc={"Projeto realizando na Next Level Week#5 no qual é criado um aplicativo de podcast, foram utilizados HTML, SASS, Typescript, NextJS com GetStaticProps, ContextAPI, Static Site Generation com revalidação automática a cada 24h caso não haja requisição e também para evitar uma possível sobrecarga de requisições tendo em vista que o conteúdo acessado será atualizado em grandes intervalos de tempos."}
            />
        </div>
        <div className={"carousel-item"} id={styles.item1} >
          <Card 
            image={DevFinanceImage} 
            url={"https://github.com/DarioJunior/dev-finance-app"} 
            title="Dev Finance"
            desc={"Projeto realizado em conjunto, durante a Maratona Discover, utilizando HTML, CSS e Javascript Vanilla"}
          />
        </div>
      </div>
    )
  }
}