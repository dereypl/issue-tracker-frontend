import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  height: 5rem;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
  background-color: ${({theme}) => theme.colors.background_gray};
`;