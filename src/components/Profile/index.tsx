import { Container } from './styles';
import stickerImg from '../../assets/sticker.png';
import instagramImg from '../../assets/instagram-icon.png';
import githubImg from '../../assets/github-icon.png';
import linkedinImg from '../../assets/linkedin-icon.png';
import whatsappImg from '../../assets/whatsapp-icon.png';
import emailImg from '../../assets/email-icon.png';

export function Profile() {
  return(
    <Container>
      <div className="profile-sticker-image">
        <img
          src={ stickerImg }
          alt="sticker bebendo café com uma cara de delicioso"
        />
      </div>
      <div className="about">
        <p className="apresentation">
          &lt; Dário Jr. /&gt;
        </p>
        <p className="abstract">
          &nbsp; Estudande de Análise e Desenvolvimentos de Sistemas pelo SENAC e Desenvolvimento Web Full Stack na Trybe, descobri na tecnologia que é possível ajudar e contribuir com a sociedade muito mais do que pensamos, e desde que conheci esse mundo todo dia aprendo algo novo, evoluindo, aprendendo e ensinando, acredito que essa seja a missão do ser humano, colaborar.
        </p>
      <div className="icon-container">
        <a
          href="https://www.instagram.com/dariojunior_"
          target="_blank"
        >
          <img
            src={ instagramImg }
            width="48px" height="48px"
          />
        </a>

        <a
          href="https://github.com/DarioJunior"
          target="_blank"
        >
          <img
            src={ githubImg }
            width="48px" height="48px" 
          />
        </a>

        <a
          href="https://www.linkedin.com/in/dario-junior/"
          target="_blank"
        >
          <img 
            src={ linkedinImg }
            width="48px" height="48px"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5555996629005"
          target="_blank"
        >
          <img 
            src={ whatsappImg }
            width="48px" height="48px"
          />
        </a>
        <a
          href="mailto:dario.junior.rs@gmail.com"
          target="_blank"
        >
          <img 
            src={ emailImg }
            width="48px" height="48px"
          />
        </a>
      </div>
      </div>
    </Container>
  )
}