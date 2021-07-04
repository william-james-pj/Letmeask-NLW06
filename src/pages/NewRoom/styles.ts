import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Title = styled.h2`
  font-size: ${fonts.lg};
  margin: 64px 0 24px;
  font-size: 'Poppins', sans-serif;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.md};
  `}
`;

export const TextMain = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.disabled};
  margin-top: 16px;
  user-select: none;

  ${respondToDown.xs`
    margin-top: 20px;
  `}
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.interactive};
  user-select: none;
`;
