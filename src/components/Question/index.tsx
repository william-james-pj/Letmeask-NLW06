import { ReactNode } from 'react';

import {
  Container,
  QuestionText,
  Footer,
  UserInfo,
  UserImg,
  UserName,
  Buttons,
} from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};

export function Question({ content, author, children }: QuestionProps) {
  return (
    <Container className="question">
      <QuestionText>{content}</QuestionText>
      <Footer>
        <UserInfo>
          <UserImg src={author.avatar} alt={author.name} />
          <UserName>{author.name}</UserName>
        </UserInfo>
        <Buttons>{children}</Buttons>
      </Footer>
    </Container>
  );
}
