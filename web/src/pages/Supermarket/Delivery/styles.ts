import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const ConfirmationView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 45.55rem;
  margin-bottom: 3rem;
`;

export const DeliveryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  border: 2px solid ${(props) => props.theme["blue-500"]};
  width: 50%;
  border-bottom-left-radius: 3rem;
  border-top-right-radius: 3rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: xx-large;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
`;

export const DeliveryIMG = styled.img`
  height: 500px;
`;

export const WhereContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const InfoView = styled.div`
  display: flex;
  flex-direction: column;
`;
