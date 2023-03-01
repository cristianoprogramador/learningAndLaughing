import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  min-height: 777px;

  img {
    align-self: center;
    height: 450px;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;

export const ScoreView = styled.pre`
  font-size: x-large;
  font-weight: bold;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
`;
