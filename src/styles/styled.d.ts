import 'styled-components ';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      text: string;
      textClear: string;
      textLink: string;

      background: string;
      backgroundButtonGoogle: string;
      borderColorHeader: string;

      borderColorInput: string;

      white: string;
    };
  }
}
