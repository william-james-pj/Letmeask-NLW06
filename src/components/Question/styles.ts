import styled from 'styled-components';

type QuestionsProps = {
  isAnswered: boolean;
  isHighlighted: boolean;
};

export const Container = styled.div<QuestionsProps>`
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + & {
    margin-top: 8px;
  }

  background: ${(props) =>
    props.isHighlighted
      ? props.theme.colors.boxNone
      : props.isAnswered
      ? props.theme.colors.boxSelect
      : props.theme.colors.boxDelete};
  border: ${(props) =>
    props.isHighlighted ? `1px solid ${props.theme.colors.secundary}` : 'none'};
`;

export const QuestionText = styled.p`
  color: ${(props) => props.theme.colors.text};
  user-select: none;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  user-select: none;
`;

export const UserName = styled.span`
  margin-left: 8px;
  color: ${(props) => props.theme.colors.disabled};
  font-size: 14px;
  user-select: none;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;
