import styled from 'styled-components';

interface Ibtn {
  active: boolean;
}

export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColorHeader};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 45px;
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
`;

export const QtdQuestions = styled.span`
  margin-left: 16px;
  background: ${(props) => props.theme.colors.textLink};
  border-radius: 9999px;
  padding: 8px 16px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 500px;
  font-size: 14px;
`;

export const Form = styled.form``;

export const TextArea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: vertical;
  min-height: 130px;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const SpanForm = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.textClear};
  font-weight: 500;
`;

export const ButoonForm = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  margin-left: 8px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: 14px;
`;

export const QuestionList = styled.div`
  margin: 32px 0;
`;

export const ButtonLike = styled.button<Ibtn>`
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: filter 0.2s;

  display: flex;
  align-items: flex-end;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.textClear};
  gap: 8px;

  svg path {
    stroke: ${(props) => props.theme.colors.primary};
  }

  :hover {
    filter: brightness(0.7);
  }
`;
