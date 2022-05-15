import styled, {css} from "styled-components";
import {ISSUE_STATE} from "../../../enum/issueState";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const StateBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 9rem;
  height: 2.5rem;
  right: 3rem;
  top: 3rem;
  padding: 0 1.3rem;
  border-radius: 0.8rem;
  font-size: ${({theme}) => theme.fontSize.s};
  border: 0.1rem solid ${({theme}) => theme.colors.gray};
  cursor: default;

  ${({state}) => state === ISSUE_STATE.PENDING && css`
    background-color: ${({theme}) => theme.colors.main};
    border: none;
  `}
  
  ${({state}) => state === ISSUE_STATE.CLOSED && css`
    text-decoration: line-through;
    background-color: ${({theme}) => theme.colors.gray};
    justify-content: center;
    cursor: default;
  `}
`;

export const StyledDoubleArrowIcon = styled(KeyboardArrowDownIcon)`
  font-size: ${({theme}) => theme.fontSize.m} !important;
  cursor: pointer;
  
  ${({open}) => open && css`
    transform: rotate(180deg);
  `}
`;


export const StateDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  width: 9rem;
  min-height: 2.5rem;
  right: 3rem;
  top: 6rem;
  border-radius: 0.8rem;
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  background-color: ${({theme}) => theme.colors.background_gray};
  cursor: pointer;

  p{
    margin: 0;
  }
`;

