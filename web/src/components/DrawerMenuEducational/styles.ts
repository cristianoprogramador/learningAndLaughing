import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;
export const CloseButton = styled.div`
  position: absolute;
  font-size: xx-large;
  background-color: ${(props) => props.theme["gray-800"]};
  text-align: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  top: 10px;
  right: 10px;

  cursor: pointer;
`;

export const TitleDrawer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 4px solid gray;
`;

export const ImageLogo = styled.img`
  width: 40%;
  align-self: center;
  margin-top: 1rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  border-bottom: 1px solid gray;
`;

export const Categories = styled.div`
  margin-top: 1rem;
`;

export const TitleSelection = styled.h2`
  padding-left: 10px;
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid gray;

  cursor: pointer;
`;
export const TitleSelectionCategories = styled.h2`
  padding-left: 10px;
  margin-top: 1.5rem;
  cursor: pointer;
`;
