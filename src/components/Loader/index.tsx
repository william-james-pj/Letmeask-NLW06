import ClipLoader from 'react-spinners/ClipLoader';
import { useDarkMode } from '../../hooks/useDarkMode';

import { Container } from './styles';

export function Loader() {
  const { theme } = useDarkMode();

  return (
    <Container>
      <ClipLoader color={theme.colors.secundary} loading={true} size={80} />
    </Container>
  );
}
