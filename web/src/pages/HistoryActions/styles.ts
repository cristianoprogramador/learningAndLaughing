import styled from "styled-components";

export const Container = styled.div``;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 757px;
  margin-bottom: 20px;
`;

export const InformationContainer = styled.div`
  margin-top: 2rem;
  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 1rem;
  width: 950px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: x-large;
  font-weight: 900;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: 30px;
  overflow: auto;
  gap: 1rem;

  div {
    margin-bottom: 5px;
  }
`;

export const ContainerAction = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 90%;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["gray-700"]};
`;

export const ContainerMainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const IndexTitle = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: medium;
    text-align: center;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
`;

export const IndexTotal = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: medium;
    text-align: right;
    padding-bottom: 5px;
    text-transform: capitalize;
  }
`;

export const TitleIndex = styled.div`
  display: flex;
  justify-content: center;
  font-size: large;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const IndexDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  color: ${(props) => props.theme["blue-300"]};
  cursor: pointer;

  p {
    font-size: medium;
    text-align: center;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
`;
