import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 7;

  background: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;
`;

export const ImgBackground = styled.img`
  max-width: 320px;
`;

export const Strong = styled.strong`
  font: 700 36px 'Poppins', sans-serif;
  line-height: 42px;
  margin-top: 16px;
  user-select: none;
`;

export const TextAside = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin-top: 16px;
  color: ${(props) => props.theme.colors.primary};
  user-select: none;
`;

export const Main = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const ImgButton = styled.img`
  margin-right: 8px;
`;

export const Separator = styled.div`
  font-size: 16px;
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
