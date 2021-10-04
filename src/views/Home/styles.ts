import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  max-width: 1280px;
  height: 100vh;
  background-color: gray;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;