import { About } from '../../components/About';
import { Profile } from '../../components/Profile';
import { Container } from './styles';

export function Home() {
  return(
    <Container>
      <Profile />
      <About />
    </Container>
  )
}