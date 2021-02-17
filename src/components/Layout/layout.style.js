import styled from "styled-components";

export const Container = styled.div`
  margin: 0 15%;
  padding: 10px;
  height: auto;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  position: relative;
  top: 70px;
  @media (max-width: 768px) {
    margin: 0 5%;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media (max-width: 576px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow: scroll;
  }
`;

export const Wrapper = styled.div`
  padding: 10px;
  flex: 1;
  max-width: 30%;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;
