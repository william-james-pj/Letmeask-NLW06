import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';
import { toast } from 'react-toastify';

import illustrationImg from '../../assets/images/illustration.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { Button } from '../../components/Button';

import {
  Container,
  Aside,
  ImgBackground,
  Strong,
  TextAside,
  Main,
  MainContent,
  Logo,
  ButtonMain,
  ImgButton,
  Separator,
  Form,
  Input,
} from './styles';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      toast.info('Room already closed.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <Container>
      <Aside>
        <ImgBackground
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <Strong>Crie salas de Q&amp;A ao-vivo</Strong>
        <TextAside>Tire as dúvidas da sua audiência em tempo-real</TextAside>
      </Aside>
      <Main>
        <MainContent>
          <Logo>Letmeask</Logo>
          <ButtonMain onClick={handleCreateRoom}>
            <ImgButton src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </ButtonMain>
          <Separator>ou entre em uma sala</Separator>
          <Form onSubmit={handleJoinRoom}>
            <Input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </Form>
        </MainContent>
      </Main>
    </Container>
  );
}
