import styled from 'styled-components';

interface IBtn {
  isOutlined: boolean;
}

export const ButtonStyled = styled.button<IBtn>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  border: 0;

  background: ${(props) =>
    props.isOutlined ? props.theme.colors.white : props.theme.colors.primary};
  color: ${(props) =>
    props.isOutlined ? props.theme.colors.primary : props.theme.colors.white};
  padding: 0 32px;
  border: ${(props) =>
    props.isOutlined ? `1px solid ${props.theme.colors.primary}` : 'none'};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: filter 0.2s;

  :not(:disabled):hover {
    filter: brightness(0.9);
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
