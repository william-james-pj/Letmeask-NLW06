import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.secundary};
  cursor: pointer;

  display: flex;
`;

export const Content = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colors.secundary};
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img``;

export const Span = styled.span`
  display: block;
  align-self: center;
  flex: 1;
  padding: 0 16px 0 12px;
  width: auto;
  font-size: ${fonts.sm};
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};

  ${respondToDown.xs`
    font-size: ${fonts.xs};
  `}
`;
