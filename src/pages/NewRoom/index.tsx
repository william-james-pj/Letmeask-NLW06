import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

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
  Form,
  Input,
} from '../Home/styles';

import { Title, TextMain, Link } from './styles';

export function NewRoom() {
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
          <Form>
            <Input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </Form>
          <TextMain>
            Quer entrar em uma nova sala já existente?
            <Link href="#">Clique aqui</Link>
          </TextMain>
        </MainContent>
      </Main>
    </Container>
  );
}
