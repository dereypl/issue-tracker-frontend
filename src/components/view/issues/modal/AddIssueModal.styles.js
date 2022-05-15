import styled, {css} from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

export const ModalBackground = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.colors.modal_bg};
  opacity: 0.4;
  z-index: 9999;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const ModalBox = styled.div`
  display: flex;
  width: 60rem;
  max-width: 60rem;
  height: ${({height}) => height || '45rem'};
  position: absolute;
  top: 15rem;
  left: calc(50% - 30rem);
  background-color: white;
  z-index: 99999;
  border-radius: 0.8rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  justify-content: space-between;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
  align-items: center;

  h3 {
    font-size: ${({theme}) => theme.fontSize.xxl};
    margin: 0;
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0.5rem 0;
  width: 100%;
`;

export const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme, success}) => success? theme.colors.gray : theme.colors.error };
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  background-color: ${({theme, success}) => success? theme.colors.green_light : `rgba(226, 101, 101, 0.2)` };

  height: 3rem;
  border-radius: 0.8rem;
  opacity: 0;
  transition: opacity .3s;
  margin-bottom: 1rem;


  ${({visible}) => visible && css`
    opacity: 1;
  `}
`;


