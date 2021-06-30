import styled from 'styled-components';

export const ContainerFlex = styled.div`
  display: flex;
  gap: 16px;

  button {
    height: 40px;
  }
`;

export const ButtonDelete = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.7);
  }
`;

export const ButtonDeleteImg = styled.img``;
