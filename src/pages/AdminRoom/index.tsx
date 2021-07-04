import { useHistory, useParams } from 'react-router-dom';
import { useRoom } from '../../hooks/useRoom';

import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { IconColorMode } from '../../components/IconColorMode';
import { NotQuestions } from '../../components/NotQuestions';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import {
  Container,
  Header,
  Content,
  ContainerButtons,
  Logo,
  Main,
  TitleContainer,
  Title,
  QtdQuestions,
  QuestionList,
} from '../Room/styles';

import { ButtonMsg, ButtonMsgImg } from './sytles';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();

  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <Container>
      <Header>
        <Content>
          <Logo src={logoImg} alt={'Letmeask'} />
          <IconColorMode />
        </Content>
      </Header>

      <ContainerButtons>
        <RoomCode code={roomId} />
        <Button isOutlined onClick={handleEndRoom}>
          Encerrar sala
        </Button>
      </ContainerButtons>

      <Main>
        <TitleContainer>
          <Title>Sala {title}</Title>
          {questions.length > 0 && (
            <QtdQuestions>{questions.length} pergunta(s)</QtdQuestions>
          )}
        </TitleContainer>
        {questions.length === 0 && (
          <NotQuestions
            title="Nenhuma pergunta por aqui..."
            text="Envie o código desta sala para seus amigos e"
            subText="comece a responder perguntas!"
          />
        )}
        <QuestionList>
          {questions.length > 0 &&
            questions.map((question) => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                    <>
                      <ButtonMsg
                        type="button"
                        onClick={() =>
                          handleCheckQuestionAsAnswered(question.id)
                        }
                      >
                        <ButtonMsgImg
                          src={checkImg}
                          alt="Marcar pergunta como respondida"
                        />
                      </ButtonMsg>
                      <ButtonMsg
                        type="button"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <ButtonMsgImg
                          src={answerImg}
                          alt="Dar destaque à pergunta"
                        />
                      </ButtonMsg>
                    </>
                  )}
                  <ButtonMsg
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <ButtonMsgImg src={deleteImg} alt="Remover pergunta" />
                  </ButtonMsg>
                </Question>
              );
            })}
        </QuestionList>
      </Main>
    </Container>
  );
}
