import styled from 'styled-components';

export const Icon = styled.img`
  max-height: 20px;
  cursor: pointer;
  transition: all 0.2s;

  svg path {
    stroke: ${(props) => props.theme.colors.text};
  }

  :hover {
    filter: brightness(0.7);
  }
`;
