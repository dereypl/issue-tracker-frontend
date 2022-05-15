import styled, {css} from "styled-components";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {ISSUE_STATE} from "../../../../enum/issueState";

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
  cursor: pointer;
  font-weight: ${({theme}) => theme.fontWeight.regular};

  &:hover {
    font-weight: ${({theme}) => theme.fontWeight.bold};
  }

  ${({state}) => state === ISSUE_STATE.PENDING && css`
    background-color: ${({theme}) => theme.colors.main};
    border: none;
  `}
  ${({state}) => state === ISSUE_STATE.CLOSED && css`
    background-color: ${({theme}) => theme.colors.gray};
    justify-content: center;
    cursor: default;

    &:hover {
      font-weight: ${({theme}) => theme.fontWeight.regular};
    }
  `}


`;

export const StyledDoubleArrowIcon = styled(DoubleArrowIcon)`
  font-size: ${({theme}) => theme.fontSize.m} !important;
`;
