import styled, {css} from "styled-components";

export const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 3rem;
  width: 100%;
  height: 15rem;
  border-radius: 0.8rem;
  background-color: white;
  box-shadow: 0 0.8rem 1.2rem 0 rgba(0, 0, 0, 0.01), 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.01);
  font-size: ${({theme}) => theme.fontSize.m};
  
  h3{
    margin: 0 0 2rem 0 ;
    font-size: ${({theme}) => theme.fontSize.l};
  }

  ${({closed}) => closed && css`
    background-color: ${({theme}) => theme.colors.background_gray};
  `}
`;



