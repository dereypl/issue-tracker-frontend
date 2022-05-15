import styled, {css} from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const StyledAddCircleOutlineIcon = styled(AddCircleOutlineIcon)`
  font-size: 2.5rem !important;
  opacity: 0.8;
  margin-bottom: -1rem;
`

export const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 3rem;
  width: 100%;
  height: 12rem;
  border-radius: 0.8rem;
  background-color: white;
  box-shadow: 0 0.8rem 1.2rem 0 rgba(0, 0, 0, 0.01), 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.01);
  font-size: ${({theme}) => theme.fontSize.m};
  
  h3{
    margin: 0 0 2rem 0 ;
    font-size: ${({theme}) => theme.fontSize.l};
  }

  ${({closed}) => closed && css`
    background-color: ${({theme}) => theme.colors.light_gray};
  `}
`;

export const AddIssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12rem;
  border-radius: 0.8rem;
  border: 0.2rem dashed ${({theme}) => theme.colors.gray};
  font-size: ${({theme}) => theme.fontSize.m};
  font-weight: ${({theme}) => theme.fontWeight.medium};
  color: ${({theme}) => theme.colors.gray};
  cursor: pointer;
  transition: all .1s ease-in-out;
  margin-bottom: 1rem;

  &:hover {
    color: ${({theme}) => theme.colors.main_dark};
    border: 0.2rem dashed ${({theme}) => theme.colors.gray};
    box-shadow: 0 0.8rem 1.2rem 0 rgba(0, 0, 0, 0.01), 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.01);
  }
`;



