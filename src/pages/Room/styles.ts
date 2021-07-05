import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

interface Ibtn {
  active: boolean;
}

export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.divider};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerButtons = styled.div`
  max-width: 800px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;

  ${respondToDown.md`
     margin: 30px 20px;
  `}
`;

export const Logo = styled.img`
  max-height: 45px;

  ${respondToDown.xs`
    max-height: 35px;
  `}
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  ${respondToDown.md`
    padding: 0 20px;
  `}
`;

export const TitleContainer = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: ${fonts.lg};
  color: ${(props) => props.theme.colors.text};
  user-select: none;
`;

export const QtdQuestions = styled.span`
  margin-left: 16px;
  background: ${(props) => props.theme.colors.interactive};
  border-radius: 9999px;
  padding: 8px 16px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 500px;
  font-size: ${fonts.sm};
  user-select: none;
`;

export const Form = styled.form``;

export const TextArea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.divider};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: vertical;
  min-height: 80px;
  color: ${(props) => props.theme.colors.text};
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const SpanForm = styled.span`
  font-size: ${fonts.sm};
  color: ${(props) => props.theme.colors.disabled};
  font-weight: 500;
`;

export const ButoonForm = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.interactive};
  text-decoration: underline;
  font-size: ${fonts.sm};
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
  font-size: ${fonts.sm};
  user-select: none;
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
    props.active ? props.theme.colors.secundary : props.theme.colors.disabled};
  gap: 8px;

  svg path {
    stroke: ${(props) => props.theme.colors.secundary};
  }

  :hover {
    filter: brightness(0.7);
  }
`;
