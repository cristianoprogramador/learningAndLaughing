import styled from "styled-components";

export const Container = styled.div``;

export const TitleIndex = styled.div`
  display: flex;
  justify-content: center;
  font-size: large;
  font-weight: bold;
  padding-top: 6px;

  text-align: center;
`;

export const IndexDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  color: ${(props) => props.theme["blue-300"]};
  cursor: pointer;
  margin-bottom: 1rem;

  p {
    font-size: medium;
    text-align: center;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 1rem;
  margin-bottom: 1rem;
  border-top: 1px solid black;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: large;
  font-weight: bold;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Price = styled.div`
  text-align: right;
  margin-bottom: 10px;
  font-size: large;
  font-weight: bold;
  display: flex;
  align-self: flex-end;
`;
