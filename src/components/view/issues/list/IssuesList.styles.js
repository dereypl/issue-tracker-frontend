import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  width: 100%;
  height: 5rem;
  background-color: ${({theme}) => theme.colors.light_gray};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  margin-bottom: 1rem;
  font-size: ${({theme}) => theme.fontSize.s};
`;