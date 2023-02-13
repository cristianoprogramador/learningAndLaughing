import styled from "styled-components";

export const Container = styled.div``;

export const TitleSelection = styled.div`
  display: flex;
  height: calc(100vh - 6.5rem);
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

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
  gap: 20px;

  h3 {
    cursor: pointer;
  }
`;
