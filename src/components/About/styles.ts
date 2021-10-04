import styled from "styled-components";

export const Container = styled.section`
  width: 55%;
  height: 100%;
  /* background-color: #E2DED0; */
  background-color: #353839;
  overflow: auto;

  display: inline-block;

  &:hover {
    transition: 0.5s;
    filter: brightness(0.8);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectCardContainer = styled.div`
  margin-top: 30px;
`;

export const TecnologiesCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;
