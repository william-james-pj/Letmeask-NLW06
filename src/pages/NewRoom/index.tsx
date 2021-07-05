import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import {
  Container,
  Aside,
  ImgBackground,
  Strong,
  TextAside,
  Main,
  MainContent,
  ImgLogo,
  Form,
  Input,
} from '../Home/styles';

import { Title, TextMain } from './styles';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') return;

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
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
          <ImgLogo src={logoImg} alt="Letmeask" />
          <Title>Criar uma nova sala</Title>
          <Form onSubmit={handleCreateRoom}>
            <Input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </Form>
          <TextMain>
            Quer entrar em uma nova sala já existente?
            <Link to="/"> Clique aqui</Link>
          </TextMain>
        </MainContent>
      </Main>
    </Container>
  );
}
