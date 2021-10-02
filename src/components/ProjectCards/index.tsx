import { Container } from './styles';

type ProjectCardsProps = {
  projectData: {
    type: string;
    name: string;
    tecnologies: Array<string>;
    description: string;
    url: string;
  }
}

export function ProjectCards({ projectData }: ProjectCardsProps) {
  const { type, name, tecnologies, description, url } = projectData;
  return(
    <Container>
      <h5>
        { type }
      </h5>
      <h2>
        { name }
      </h2>
        { tecnologies.map(tech => <h4> { tech + ' |'} </h4>) }
      <h4>
      </h4>
      <p>
        { description }
      </p>
     <a href={ url } target="_blank">
       Acesse.
     </a>
    </Container>
  )
}