import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-template-rows: 1fr;
  height: 100vh;

  ${respondToDown.xs`
    grid-template-columns: 1fr;
    grid-template-rows: 0.9fr 1.1fr;
  `}
`;

export const Aside = styled.aside`
  background: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 100px 80px;

  ${respondToDown.xs`
    padding: 40px 60px;
  `}
`;

export const ImgBackground = styled.img`
  max-width: 200px;

  ${respondToDown.xs`
    max-width: 150px;
  `}
`;

export const Strong = styled.strong`
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: ${fonts.xxl};
  line-height: 42px;
  margin-top: 16px;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.xl};
  `}
`;

export const TextAside = styled.p`
  font-size: ${fonts.normal};
  line-height: 32px;
  margin-top: 16px;
  color: ${(props) => props.theme.colors.primary};
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.normal};
  `}
`;

export const Main = styled.main`
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${respondToDown.xs`
    padding: 40px 40px;
  `}
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;
`;

export const ImgLogo = styled.img`
  align-self: center;
`;

export const ButtonMain = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  font-size: ${fonts.normal};
  background: ${(props) => props.theme.colors.buttonGoogle};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;

export const ImgButton = styled.img`
  margin-right: 8px;
`;

export const Separator = styled.div`
  font-size: ${fonts.normal};
  color: ${(props) => props.theme.colors.disabled};
  user-select: none;

  margin: 32px 0;
  display: flex;
  align-items: center;

  ::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${(props) => props.theme.colors.disabled};
    margin-left: 16px;
  }

  ::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${(props) => props.theme.colors.disabled};
    margin-right: 16px;
  }

  ${respondToDown.xs`
    font-size: ${fonts.sm};

    ::after {
      margin-left: 10px;
    }

    ::before { 
      margin-right: 10px;
    }
  `}
`;

export const Form = styled.form`
  > button {
    width: 100%;
    margin-top: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.disabled};
`;
