import styled, {css} from 'styled-components';
import {forwardRef} from "react";

const InputWrapper = styled.input`
  display: flex;
  margin-top: ${({marginTop}) => marginTop || '0'};
  margin-right: ${({marginRight}) => marginRight || '0'};
  margin-bottom: ${({marginBottom}) => marginBottom || '0.5rem'};
  height: ${({height}) => height || '4.5rem'};
  padding: 1rem 3rem 1rem 0;
  font-size: ${({theme}) => theme.fontSize.m};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  border: none;
  width: ${({width}) => width || '100%'};
  border-bottom: 0.1rem solid ${({theme}) => theme.colors.light_gray};

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  ::placeholder {
    color: ${({theme}) => theme.colors.gray_icons};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: transparent;
    color: ${({theme}) => theme.colors.light_gray};
  }

  ${({hasError}) => hasError && css`
    border-bottom: 0.1rem solid ${({theme}) => theme.colors.error};
  `}
`;

export const Label = styled.p`
  display: flex;
  color: ${({theme, color}) => color || theme.colors.main_dark};
  font-size: ${({theme}) => theme.fontSize.m};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  margin: ${({marginTop}) => marginTop || '0.5rem'} 0 0.5rem;
  padding: 0;

  ${({disabled}) => disabled && css`
    color: ${({theme}) => theme.colors.light_gray};
  `}
`;

export const RequiredErrorLabel = styled.p`
  display: flex;
  justify-content: flex-end;
  color: ${({theme}) => theme.colors.error};
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  margin: 0 0 0.5rem 0;
  padding: 0;
  height: 1.2rem;
`;


export const RequiredError = ({visible}) =>
    <RequiredErrorLabel>{visible ? 'This field is required' : ''}</RequiredErrorLabel>


const Input = forwardRef(({label, ...props}, ref) => (
    <>
        <Label>{label}</Label>
        <InputWrapper
            {...props}
            ref={ref}
        />
        <RequiredError visible={props.hasError}/>
    </>
))

export default Input

