import { Container } from './styles';

type ProjectCardsProps = {
  projectData: {
    type: string;
    name: string;
    tecnologies: Array<string>;
    description: string;
  }
}

export function ProjectCards({ projectData }: ProjectCardsProps) {
  const { type, name, tecnologies, description } = projectData;
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
    </Container>
  )
}