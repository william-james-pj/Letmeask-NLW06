import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 24px;
  margin: 64px 0 24px;
  font-size: 'Poppins', sans-serif;
  user-select: none;
`;

export const TextMain = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.disabled};
  margin-top: 16px;
  user-select: none;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.interactive};
  user-select: none;
`;
