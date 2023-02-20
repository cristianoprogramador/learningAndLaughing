import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;
export const Information = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41.7rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 1200px;
  height: 500px;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  padding: 1rem;
`;

export const ProductImages = styled.div`
  align-self: center;

  img {
    border-radius: 10px;
    width: 350px;
    object-fit: contain;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  width: 35%;
  .title {
    font-size: medium;
  }
  .name {
    font-size: xx-large;
    margin: 1rem 0;
  }
  .price {
    font-size: xx-large;
    margin: 0.5rem 0;
    color: ${(props) => props.theme["green-700"]};
    font-weight: 900;
  }
  .description {
    margin: 1rem 0;
    text-align: justify;
  }
`;

export const ProductCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 25%;
  height: 100%;
  border: 2px solid ${(props) => props.theme["gray-500"]}; ;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  justify-content: space-evenly;
`;

export const AddressDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;

  .arrive {
    font-size: medium;
  }
`;

export const SendTo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.5rem;

  .sendto {
    font-size: smaller;
    color: #3483fa;
  }
`;

export const StockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  gap: 0.5rem;

  .howMany {
    font-size: small;
    margin-left: 1rem;
  }

  .buttonDifferent {
    padding: 0.75rem 2.8rem;
    color: white;
    font-weight: 700;
    background: ${(props) => props.theme["blue-700"]};
    font-size: medium;
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    transition: 0.4s;
    line-height: 1.3rem;
    margin-top: 0.7rem;
    width: 80%;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["blue-500"]};
    }
  }
`;

export const ImportantInf = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      font-size: small;
      margin-left: 1rem;
      text-align: left;
    }
  }
`;
