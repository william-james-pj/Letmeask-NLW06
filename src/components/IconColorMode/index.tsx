import moonImg from '../../assets/images/moon.svg';
import sunImg from '../../assets/images/sun.svg';
import { useDarkMode } from '../../hooks/useDarkMode';

import { Icon } from './styles';

export function IconColorMode() {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <Icon
      onClick={toggleTheme}
      src={theme.title === 'light' ? moonImg : sunImg}
    />
  );
}
