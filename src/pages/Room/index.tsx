import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg';

import {
  Container,
  Header,
  Content,
  Logo,
  Main,
  TitleContainer,
  Title,
  QtdQuestions,
  Form,
  TextArea,
  FormFooter,
  SpanForm,
  ButoonForm,
  UserInfo,
  UserImg,
  UserName,
} from './styles';

type FirebaseQuestions = Record<
  string,
  {
    content: string;
    author: {
      name: string;
      avatar: string;
    };
    isHighlighted: string;
    isAnswered: string;
  }
>;

type Questions = {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isHighlighted: string;
  isAnswered: string;
};

type RoomParams = {
  id: string;
};

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [title, setTitle] = useState('');

  const roomID = params.id;

  useEffect(() => {
    const roomRef = database.ref(`room/${roomID}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          };
        },
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });

    return () => {};
  }, [roomID]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    if (newQuestion.trim() === '') return;

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomID}/questions`).push(question);

    setNewQuestion('');
  }

  return (
    <Container>
      <Header>
        <Content>
          <Logo src={logoImg} alt={'Letmeask'} />
          <RoomCode code={roomID} />
        </Content>
      </Header>

      <Main>
        <TitleContainer>
          <Title>Sala {title}</Title>
          {questions.length > 0 && (
            <QtdQuestions>{questions.length} pergunta(s)</QtdQuestions>
          )}
        </TitleContainer>

        <Form>
          <TextArea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <FormFooter onSubmit={handleSendQuestion}>
            {user ? (
              <UserInfo>
                <UserImg src={user.avatar} alt={user.name} />
                <UserName>{user.name}</UserName>
              </UserInfo>
            ) : (
              <SpanForm>
                Para enviar uma pergunta,
                <ButoonForm>faça seu login</ButoonForm>.
              </SpanForm>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </FormFooter>
        </Form>
      </Main>
    </Container>
  );
}
