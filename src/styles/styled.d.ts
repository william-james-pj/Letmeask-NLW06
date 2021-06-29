import 'styled-components ';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      text: string;

      background: string;
      backgroundButtonGoogle: string;

      borderColorInput: string;

      white: string;
    };
  }
}
