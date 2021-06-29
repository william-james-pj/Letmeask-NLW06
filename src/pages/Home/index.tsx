import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
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
  ImgLogo,
  ButtonMain,
  ImgButton,
  Separator,
  Form,
  Input,
} from './styles';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
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
          <ButtonMain onClick={handleCreateRoom}>
            <ImgButton src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </ButtonMain>
          <Separator>ou entre em uma sala</Separator>
          <Form>
            <Input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </Form>
        </MainContent>
      </Main>
    </Container>
  );
}
