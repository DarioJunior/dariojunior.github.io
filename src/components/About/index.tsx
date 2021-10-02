import { ProjectCards } from "../ProjectCards";
import { Container, ProjectCardContainer, TecnologiesCardContainer } from "./styles";
import { Projects, Tecnologies } from '../../data/data';
import { TecnologyCards } from "../TecnologyCards";

export function About() {
  return(
    <>
      <Container>
        <ProjectCardContainer>
          {
            Projects.map(project => <ProjectCards projectData={ project } />)
          }
        </ProjectCardContainer>
        <TecnologiesCardContainer>
          {
            Tecnologies.map((tech) => <TecnologyCards tecnology={ tech } />)
          }
        </TecnologiesCardContainer>
      </Container>
    </>
  )
}
