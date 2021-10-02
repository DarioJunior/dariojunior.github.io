import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 25px;
  margin: 40px auto;
  padding: 30px 30px;
  cursor: pointer;
  display: flex;

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
    filter: brightness(1.2);
  }

  img {
    width: 150px;
    margin: auto;
  }
`;
