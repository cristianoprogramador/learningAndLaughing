import styled from "styled-components";

export const ListProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  border-bottom: 1px solid black;
`;

export const InfoAndImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ProductImage = styled.img`
  height: 125px;
  width: 125px;
  border-radius: 5px;
  object-fit: contain;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityView = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  height: 4rem;
  width: 6rem;

  > div {
    max-width: 4.5rem;
  }
`;

export const RemoveView = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 6rem;
  padding-left: 5px;

  :hover {
    color: white;
  }

  p {
    display: flex;
    align-items: center;
  }
`;
