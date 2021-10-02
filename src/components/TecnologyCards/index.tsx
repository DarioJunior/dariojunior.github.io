import { Container } from './styles';

type TecnologyCardsProps = {
  tecnology: {
    name: string;
    url: string;
  }
}

export function TecnologyCards({ tecnology }:TecnologyCardsProps) {
  console.log(tecnology)
  const { name, url } = tecnology;
  return(
    <Container>
      <img src={ url } alt={ name } />
    </Container>
  )
}