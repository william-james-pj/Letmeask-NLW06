import copyImg from '../assets/images/copy.svg';

import { Button, Content, Img, Span } from './styles';

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Button onClick={copyRoomCodeToClipboard}>
      <Content>
        <Img src={copyImg} alt="Copy room code" />
      </Content>
      <Span>Sala #{props.code}</Span>
    </Button>
  );
}
