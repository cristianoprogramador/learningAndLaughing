import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const GeneralInfo = styled.main`
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 0.4rem;
  display: flex;
  flex-direction: row;
`;
export const InfoAndIcon = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1rem;
`;

export const DailyOffers = styled.main``;

export const BestSellers = styled.main``;

export const Categories = styled.main``;
