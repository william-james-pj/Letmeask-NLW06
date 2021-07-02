import EmptyQuestionsImg from '../../assets/images/empty-questions.svg';

import { Img, Container, Title, Text } from './styles';

type NotQuestionsProps = {
  title: string;
  text: string;
  subText?: string;
};

export function NotQuestions({ title, text, subText }: NotQuestionsProps) {
  return (
    <Container>
      <Img src={EmptyQuestionsImg} alt={'Nenhuma questão'} />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Text>{subText}</Text>
    </Container>
  );
}
