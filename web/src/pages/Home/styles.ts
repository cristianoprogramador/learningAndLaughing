import styled from "styled-components";

export const Container = styled.div``;

export const TitleSelection = styled.div``;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 50px;

  img {
    margin-top: 50px;
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  h3 {
    cursor: pointer;
  }
`;
