import React from 'react';
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10%;
  margin: 2rem 0 4rem 0;
  font-size: ${({theme}) => theme.fontSize.xxl};
`;

const Header = () => {
    return (
        <HeaderContainer>
            Issue-Tracker
        </HeaderContainer>
    );
};

export default Header;